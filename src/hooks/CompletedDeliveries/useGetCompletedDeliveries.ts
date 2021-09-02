import { sendQuery } from "global";
import { useState, useEffect } from "react";
import { DeliveryProps } from "types/Delivery";

const useGetCompletedDeliveries = () =>{
    const [completedDeliveries, setCompletedDeliveries] = useState<DeliveryProps[]>([]);
    const [error, setError] = useState("");
    const getCompletedDeliveries = async() =>{
        try {
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
        } catch(err) {
            setError("An Error Occured While Trying To Load Completed Deliveries Please Try Again");
        }
    }
    useEffect(() =>{
        getCompletedDeliveries();
    }, []);
    return {
        completedDeliveries,
        error
    };
}

export default useGetCompletedDeliveries;
