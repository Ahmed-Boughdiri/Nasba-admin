import { sendQuery } from "global";
import { useState, useEffect } from "react";
import { DeliveryProps } from "types/Delivery";

const useGetCompletedDeliveries = () =>{
    const [completedDeliveries, setCompletedDeliveries] = useState<DeliveryProps[]>([]);
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
            console.log("Result: ", result.completedDeliveries);
            setCompletedDeliveries(result.completedDeliveries);
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() =>{
        getCompletedDeliveries();
    }, []);
    return completedDeliveries;
}

export default useGetCompletedDeliveries;
