import useHandleModifyProductDetailsState from "./useHandleModifyProductDetailsState";
import { sendQuery, uploadImage } from "global";
import { useDispatch } from "react-redux";
import { History } from "history";

function handleModifiedData({
    name,
    label,
    price,
    discountPrice,
    size,
    genre,
    status
}: {
    name: String | undefined,
    label: String | undefined,
    price: Number | null,
    discountPrice: Number | null,
    size: String | undefined,
    genre: String | undefined,
    status: String | undefined
}) {
    let result = "";
    if(name)
        result += `name: "${name}"\n`;
    if(price)
        result += `price: ${price}\n`;
    if(label)
        result += `label: "${label}"\n`;
    if(discountPrice)
        result += `discountPrice: ${discountPrice}\n`;
    if(size)
        result += `size: "${size}"\n`;
    if(genre)
        result += `genre: "${genre}\n"`;
    if(status)
        result += `status: "${status}"`;
    return result;
}

const useHandleModifyProductDetails = (
    history: History | undefined,
    productID: String
) =>{
    const formState = useHandleModifyProductDetailsState();
    const dispatch = useDispatch();
    const handleModifyProductDetails = async() =>{
        try {
            const modifiedData = handleModifiedData({
                name: formState.state.productName,
                label: formState.state.productLabel,
                discountPrice: formState.state.productDiscountPrice,
                genre: formState.state.productGenre,
                price: formState.state.productPrice,
                size: formState.state.productSize,
                status: formState.state.productStatus
            });
            const result = await sendQuery(`
                mutation {
                    modifyProductDetails(newProductDetails: {
                        productID: "${productID}",
                        ${modifiedData}
                    }) {
                        name,
                        label,
                        price,
                        discountPrice,
                        size,
                        genre,
                        thumbnail,
                        status,
                        id
                    }
                }
            `);
            await uploadImage(
                formState.state.productThumbnail, 
                result.modifyProductDetails.id
            );
            formState.emptyState();
            dispatch({
                type: "TOGGLE_MODIFY_PRODUCT_DETAILS_MODAL",
                payload: false
            });
            if(history)
                history.push("/products");
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    return {
        formState,
        handleModifyProductDetails
    }
}

export default useHandleModifyProductDetails;
