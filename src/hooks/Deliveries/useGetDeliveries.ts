import { sendQuery } from "global";
import { useState, useEffect } from "react";
import { DeliveryProps } from "types/Delivery";

const useGetDeliveries = () =>{
    const [deliveries, setDeliveries] = useState<DeliveryProps[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const getDeliveries = async() =>{
        try {
            setLoading(true);
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
            setLoading(false);
        } catch(err) {
            setError("An Error Occured While Trying To Load Deliveries, Please Try Again");
            setLoading(false);
        }
    }
    useEffect(() =>{
        getDeliveries();
    }, []);
    return {
        deliveries,
        error,
        loading
    };
}

export default useGetDeliveries;
