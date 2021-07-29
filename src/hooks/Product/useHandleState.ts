import React, { useState } from "react";

const useHandleState = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState<Number|null>(null);
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<Number|null>(null);
    return {
        state: {
            firstName,
            lastName,
            address,
            city,
            zipCode,
            email,
            phoneNumber
        },
        controllers: {
            handleFirstName: 
                (e:React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value),
            handleLastName: 
                (e:React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value),
            handleAddress: 
                (e:React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value),
            handleCity: 
                (e:React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value),
            handleZipCode: 
                (e:React.ChangeEvent<HTMLInputElement>) => setZipCode(+e.target.value),
            handleEmail: 
                (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            handlePhoneNumber: 
                (e:React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(+e.target.value)
        },
        emptyState: () =>{
            setFirstName("");
            setLastName("");
            setAddress("");
            setCity("");
            setZipCode(null);
            setEmail("");
            setPhoneNumber(null);
        }
    }
}

export default useHandleState;
