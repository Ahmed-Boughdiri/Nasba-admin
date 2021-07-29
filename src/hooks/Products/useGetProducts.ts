import { sendQuery } from "global";
import { useEffect, useState } from "react";
import { ProductProps } from "types/Product";

const useGetProducts = () =>{
    const [products, setProducts] = useState<ProductProps[]>([]);
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
            console.log(err);
        }
    }
    useEffect(() =>{
        getProducts();
    }, []);
    return products;
}

export default useGetProducts;
