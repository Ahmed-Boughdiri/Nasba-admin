import { useDispatch } from "react-redux";
import { DeliveryProps } from "types/Delivery";
import { History } from "history";

const useHandleMoreInfo = (history: History) =>{
    const dispatch = useDispatch();
    const handleMoreInfo = (delivery: DeliveryProps) =>{
        dispatch({
            type: "STORE_DELIVERY_INFO",
            payload: delivery
        });
        history.push("/delivery");
    }
    return handleMoreInfo;
}

export default useHandleMoreInfo;
