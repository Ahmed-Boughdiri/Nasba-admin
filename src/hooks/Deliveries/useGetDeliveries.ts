import { sendQuery } from "global";
import { useState, useEffect } from "react";
import { DeliveryProps } from "types/Delivery";

const useGetDeliveries = () =>{
    const [deliveries, setDeliveries] = useState<DeliveryProps[]>([]);
    const [error, setError] = useState("");
    const getDeliveries = async() =>{
        try {
            const result = await sendQuery(`
                query {
                    pendingDeliveries {
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
            setDeliveries(result.pendingDeliveries);
        } catch(err) {
            setError("An Error Occured While Trying To Load Deliveries, Please Try Again");
        }
    }
    useEffect(() =>{
        getDeliveries();
    }, []);
    return {
        deliveries,
        error
    };
}

export default useGetDeliveries;
