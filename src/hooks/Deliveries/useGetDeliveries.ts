import { sendQuery } from "global";
import { useState, useEffect } from "react";
import { DeliveryProps } from "types/Delivery";

const useGetDeliveries = () =>{
    const [deliveries, setDeliveries] = useState<DeliveryProps[]>([]);
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
            setDeliveries(result.pendingDeliveries);
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() =>{
        getDeliveries();
    }, []);
    return deliveries;
}

export default useGetDeliveries;
