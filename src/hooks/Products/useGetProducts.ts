import { sendQuery } from "global";
import { useEffect, useState } from "react";
import { ProductProps } from "types/Product";

const useGetProducts = () =>{
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const getProducts = async() =>{
        setLoading(true);
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
            setProducts(data.products);
            setLoading(false);
        } catch(err) {
            setError("An Error Has Occured While Trying To Load Products Please Try Again");
            setLoading(false);
        }
    }
    useEffect(() =>{
        getProducts();
    }, []);
    return {
        products,
        error,
        loading
    }
}

export default useGetProducts;
