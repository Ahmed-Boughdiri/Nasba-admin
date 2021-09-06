import { sendQuery } from "global";
import { History } from "history";
import { useDispatch } from "react-redux";

const useHandleDeleteProduct = (
    history: History | undefined,
    productID: String
) =>{
    const dispatch = useDispatch();
    const handleDeleteProduct = async() =>{
        try {
            const result = await sendQuery(`
                mutation {
                    deleteProduct(productID: "${productID}") {
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
            dispatch({
                type: "TOGGLE_CONFIRM_DELETE_PRODUCT_MODAL",
                payload: false
            })
            if(history)
                history.push("/products");
        } catch(err) {
            return;
        }
    }
    return {
        handleDeleteProduct
    }
}

export default useHandleDeleteProduct;
