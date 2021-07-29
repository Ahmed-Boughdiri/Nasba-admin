import React,{ useState } from "react";

const useHandleModifyProductDetailsState = () =>{
    const [productName, setProductName] = useState("");
    const [productLabel, setProductLabel] = useState("");
    const [productPrice, setProductPrice] = useState<Number|null>(null);
    const [productDiscountPrice, setProductDiscountPrice] = useState<Number|null>(null);
    const [productSize, setProductSize] = useState("");
    const [productGenre, setProductGenre] = useState("");
    const [productStatus, setProductStatus] = useState("AVAILABLE");
    const [productThumbnail, setProductThumbnail] = useState<FileList|null>(null); 
    return {
        state: {
            productName,
            productLabel,
            productPrice,
            productDiscountPrice,
            productSize,
            productGenre,
            productStatus,
            productThumbnail
        },
        controllers: {
            handleProductName: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value),
            handleProductLabel: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductLabel(e.target.value),
            handleProductPrice: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductPrice(+e.target.value),
            handleProductDiscountPrice: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductDiscountPrice(+e.target.value),
            handleProductSize: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductSize(e.target.value),
            handleProductGenre: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductGenre(e.target.value),
            handleProductStatus: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductStatus(e.target.value),
            handleProductThumbnail: 
                (e:React.ChangeEvent<HTMLInputElement>) => setProductThumbnail(e.target.files && e.target.files),
        },
        emptyState: () =>{
            setProductName("");
            setProductLabel("");
            setProductPrice(null);
            setProductDiscountPrice(null);
            setProductSize("");
            setProductGenre("");
            setProductSize("");
            setProductThumbnail(null);
        }
    }
}

export default useHandleModifyProductDetailsState;
