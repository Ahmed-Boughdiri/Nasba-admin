import { sendQuery } from "global";
import { useState, useEffect } from "react";
import { DeliveryProps } from "types/Delivery";

const useGetCompletedDeliveries = () =>{
    const [completedDeliveries, setCompletedDeliveries] = useState<DeliveryProps[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const getCompletedDeliveries = async() =>{
        try {
            setLoading(true);
            const result = await sendQuery(`
                query {
                    completedDeliveries {
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
            setCompletedDeliveries(result.completedDeliveries);
            setLoading(false);
        } catch(err) {
            setError("An Error Occured While Trying To Load Completed Deliveries Please Try Again");
            setLoading(false);
        }
    }
    useEffect(() =>{
        getCompletedDeliveries();
    }, []);
    return {
        completedDeliveries,
        error,
        loading
    };
}

export default useGetCompletedDeliveries;
