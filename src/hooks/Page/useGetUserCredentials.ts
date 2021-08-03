import { useState, useEffect } from "react";
import { getUserCredentialsOnLocalStorage } from "utils";

const useGetUserCredentials = () =>{
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        id: ""
    });
    const getUserCredentials = async() =>{
        const result = await getUserCredentialsOnLocalStorage();
        setUser(result);
    }
    useEffect(() =>{
        getUserCredentials();
    }, []);
    return {
        user
    }
}

export default useGetUserCredentials;
