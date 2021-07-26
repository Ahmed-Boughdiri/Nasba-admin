import React, { useState } from "react";

const useHandleFormState = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return {
        state: {
            email,
            password
        },
        controllers: {
            handleEmail: 
                (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            handlePassword: 
                (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        }
    }
}

export default useHandleFormState;
