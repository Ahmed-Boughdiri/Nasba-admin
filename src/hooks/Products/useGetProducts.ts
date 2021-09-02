import { sendQuery } from "global";
import { useEffect, useState } from "react";
import { ProductProps } from "types/Product";

const useGetProducts = () =>{
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [error, setError] = useState("");
    const getProducts = async() =>{
        try {
            const data = await sendQuery(`
                query {
                    products {
                        name,
                        label,
                        price,
                        size,
                        genre,
                        thumbnail,
                        status,
                        id
                    }
                }
            `);
            console.log("Data: ", data.products);
            setProducts(data.products);
        } catch(err) {
            setError("An Error Has Occured While Trying To Load Products Please Try Again");
        }
    }
    useEffect(() =>{
        getProducts();
    }, []);
    return {
        products,
        error
    }
}

export default useGetProducts;
