import useHandleState from "./useHandleState";
import { sendQuery } from "global";
import { useDispatch } from "react-redux";

const useHandleMakeDelivery = () =>{
    const formState = useHandleState();
    const dispatch = useDispatch();
    const handleMakeDelivery = async(productID: String) =>{
        try {
            console.log("productID: ", productID)
            const result = await sendQuery(`
                mutation {
                    createDelivery(delivery: {
                        firstName: "${formState.state.firstName}",
                        lastName: "${formState.state.lastName}",
                        address: "${formState.state.address}",
                        city: "${formState.state.city}",
                        zipCode: ${formState.state.zipCode},
                        email: "${formState.state.email}",
                        phoneNumber: ${formState.state.phoneNumber},
                        productID: "${productID}"
                    }) {
                        firstName,
                        lastName,
                        address,
                        city,
                        zipCode,
                        email,
                        phoneNumber,
                        status,
                        productName,
                        productLabel,
                        productPrice,
                        productDiscountPrice,
                        productSize,
                        productGenre,
                        productThumbnail
                    }
                }
            `);
            console.log("Result: ", result.createDelivery);
            dispatch({
                type: "TOGGLE_MAKE_DELIVERY_MODAL",
                payload: false
            });
            formState.emptyState();
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    return {
        formState,
        handleMakeDelivery
    }
}

export default useHandleMakeDelivery;
