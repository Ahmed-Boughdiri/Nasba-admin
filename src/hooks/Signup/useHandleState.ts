import { useState } from "react";

const useHandleState = () =>{
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    return {
        state: {
            email,
            fullName,
            password
        },
        controllers: {
            handleEmail: 
                (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            handleFullName: 
                (e:React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value),
            handlePassword:
                (e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
        }
    }
}

export default useHandleState;
