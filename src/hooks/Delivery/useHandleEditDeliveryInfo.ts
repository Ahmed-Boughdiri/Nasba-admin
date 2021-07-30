import useHandleState from "./useHandleState";
import { sendQuery } from "global";
import { useDispatch } from "react-redux";
import { History } from "history";

function handleModifiedInfo({
    firstName,
    lastName,
    address,
    city,
    zipCode,
    email,
    phoneNumber,
    status,
    productID
}: {
    firstName?: String,
    lastName?: String,
    address?: String,
    city?: String,
    zipCode?: Number | null,
    email?: String,
    phoneNumber?: Number | null,
    status?: String,
    productID?: String
}) {
    let result = "";
    if(firstName)
        result += `firstName: "${firstName}",\n`;
    if(lastName)
        result += `lastName: "${lastName}",\n`;
    if(address)
        result += `address: "${address}",\n`;
    if(city)
        result += `city: "${city}",\n`;
    if(zipCode)
        result += `zipCode: ${zipCode},\n`;
    if(email)
        result += `email: "${email}",\n`;
    if(phoneNumber)
        result += `phoneNumber: ${phoneNumber},\n`;
    if(status)
        result += `status: "${status}",\n`;
    if(productID)
        result += `productID: "${productID}",\n`;
    return result;
}

const useHandleEditDeliveryInfo = (
    history: History | undefined,
    deliveryID: String
) =>{
    const formState = useHandleState();
    const dispatch = useDispatch();
    const handleEditDeliveryInfo = async() =>{
        const modifiedInfo = handleModifiedInfo({
            firstName: formState.state.firstName,
            lastName: formState.state.lastName,
            address: formState.state.address,
            city: formState.state.city,
            zipCode: formState.state.zipCode,
            email: formState.state.email,
            phoneNumber: formState.state.phoneNumber,
            status: formState.state.status,
            productID: formState.state.productID
        });
        try {
            const result = await sendQuery(`
                mutation {
                    editDeliveryInfo(editedDeliveryInfo: {
                        deliveryID: "${deliveryID}",
                        ${modifiedInfo}
                    }) {
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
            formState.emptyState();
            dispatch({
                type: "TOGGLE_EDIT_DELIVERY_MODAL",
                payload: false
            });
            if(history)
                history.push("deliveries");
        } catch(err) {
            console.log("Error: ", err);
        }  
    } 
    return {
        formState,
        handleEditDeliveryInfo
    }
}

export default useHandleEditDeliveryInfo;
