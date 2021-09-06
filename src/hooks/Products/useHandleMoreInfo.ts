import { useDispatch } from "react-redux";
import { ProductProps } from "types/Product";
import { History } from "history";

const useHandleMoreInfo = (history: History) =>{
    const dispatch = useDispatch();
    const handleMoreInfo = (product: ProductProps) =>{
        dispatch({
            type: "STORE_PRODUCT_DATA",
            payload: product
        });
        history.push("/product");
    }
    return handleMoreInfo;
}

export default useHandleMoreInfo;
