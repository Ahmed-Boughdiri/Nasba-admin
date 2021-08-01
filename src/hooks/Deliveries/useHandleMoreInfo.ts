import { useDispatch } from "react-redux";
import { DeliveryProps } from "types/Delivery";
import { History } from "history";

const useHandleMoreInfo = (
    history: History,
    completedDeliveries: Boolean
) =>{
    const dispatch = useDispatch();
    const handleMoreInfo = (delivery: DeliveryProps) =>{
        dispatch({
            type: "STORE_DELIVERY_INFO",
            payload: delivery
        });
        dispatch({
            type: "TOGGLE_COMPLETECD_DELIVERIES_STATE",
            payload: completedDeliveries
        });
        history.push("/delivery");
    }
    return handleMoreInfo;
}

export default useHandleMoreInfo;
