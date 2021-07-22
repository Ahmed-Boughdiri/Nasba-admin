import React, { useState } from "react";

const useHandleFormState = () =>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState<Number|null>(null);
    const [discountPrice, setDiscountPrice] = useState<Number|null>(null);
    const [label, setLabel] = useState("");
    const [size, setSize] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("AVAILABLE");
    const [thumbnail, setThumbnail] = useState<any>("");
    return {
        state: {
            name,
            price,
            discountPrice,
            label,
            size,
            genre,
            status,
            thumbnail
        },
        controllers: {
            handleName: 
                (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
            handlePrice: 
                (e:React.ChangeEvent<HTMLInputElement>) => setPrice(+e.target.value),
            handleDiscountPrice: 
                (e:React.ChangeEvent<HTMLInputElement>) => setDiscountPrice(+e.target.value),
            handleLabel: 
                (e:React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
            handleSize: 
                (e:React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value),
            handleGenre: 
                (e:React.ChangeEvent<HTMLInputElement>) => setGenre(e.target.value),
            handleStatus: 
                (e:React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value),
            handleThumbnail: 
                (e:React.ChangeEvent<HTMLInputElement>) => setThumbnail(e.target.value),
        }
    }
}

export default useHandleFormState;
