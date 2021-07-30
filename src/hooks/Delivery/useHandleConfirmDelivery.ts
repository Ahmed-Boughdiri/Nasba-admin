import { sendQuery } from "global";
import { History } from "history";
import { useDispatch } from "react-redux";

const useHandleConfirmDelivery = (
    history: History | undefined,
    deliveryID: String
) =>{
    const dispatch = useDispatch();
    const handleConfirmDelivery = async() =>{
        try {
            const result = await sendQuery(`
                mutation {
                    checkCompletedDelivery(id: "${deliveryID}") {
                        firstName,
                        lastName,
                        address,
                        city,
                        zipCode,
                        email,
                        phoneNumber,
                        status,
                        id,
                        productName,
                        productLabel,
                        productPrice,
                        productDiscountPrice,
                        productSize,
                        productGenre,
                        productThumbnail,
                        productID
                    }
                }
            `);
            console.log("Result: ", result);
            dispatch({
                type: "TOGGLE_CONFIRM_DELIVERY_MODAL",
                payload: false,
            });
            if(history)
                history.push("/deliveries");
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    return {
        handleConfirmDelivery
    }
}

export default useHandleConfirmDelivery;
