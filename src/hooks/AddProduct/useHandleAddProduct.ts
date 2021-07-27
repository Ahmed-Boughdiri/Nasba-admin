import useHandleFormState from "./useHandleFormState";
import { sendQuery, uploadImage } from "global";
import { useDispatch } from "react-redux";
import { History } from "history";

// TODO: FIX THE DISCOUNT PRICE ISSUE
const useHandleAddProduct = (history: History) =>{
    const formState = useHandleFormState();
    const dispatch = useDispatch();
    const handleAddProduct = async() =>{
        console.log("State: ", formState.state);
        try {
            const result = await sendQuery(`
                mutation {
                    createProduct(product: {
                        name: "${formState.state.name}",
                        label: "${formState.state.label}",
                        price: ${formState.state.price},
                        discountPrice: ${formState.state.discountPrice},
                        size: "${formState.state.size}",
                        genre: "${formState.state.genre}",
                        status: "AVAILABLE"
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
            const thumbnail = await uploadImage(formState.state.thumbnail, result.createProduct.id);
            dispatch({
                type: "STORE_PRODUCT_DATA",
                payload: {
                    ...result.createProduct,
                    thumbnail
            }
            });
            history.push("/product");
        } catch(err) {
            console.log(err);
        }
    }
    return {
        formState,
        handleAddProduct
    }
}

export default useHandleAddProduct;
