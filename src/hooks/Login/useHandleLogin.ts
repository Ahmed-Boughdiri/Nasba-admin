import useHandleFormState from "./useHandleFormState";
import { sendQuery } from "global";
import { History } from "history";
import { useDispatch } from "react-redux";
import { 
    saveTokenOnLocalStorage,
    saveUserCredentialsOnLocalStorage
} from "utils";
import { useState } from "react";

const useHandleLogin = (history: History) =>{
    const formState = useHandleFormState();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleLogin = async() =>{
        try {
            setLoading(true);
            const result = await sendQuery(`
                query {
                    adminPanelLogin(adminPanelLoginInput: {
                        email: "${formState.state.email}",
                        password: "${formState.state.password}"
                    }) {
                        success,
                        approved,
                        id,
                        email,
                        fullName,
                        token
                    }
                }
            `);
            await saveTokenOnLocalStorage(result.adminPanelLogin.token);
            await saveUserCredentialsOnLocalStorage({
                fullName: result.adminPanelLogin.fullName,
                email: result.adminPanelLogin.email,
                id: result.adminPanelLogin.id
            });
            if(result.adminPanelLogin.approved) {
                dispatch({
                    type: "STORE_USER_DATA",
                    payload: {
                        id: result.adminPanelLogin.id,
                        email: result.adminPanelLogin.email,
                        fullName: result.adminPanelLogin.fullName,
                        token: result.adminPanelLogin.token
                    }
                });
                history.push("/products");
            } else {
                setError("User Not Approved Yet");
                setLoading(false);
            }
        } catch(err: any) {
            setError(
                err?.response?.data.errors[0].message ||
                "An Error Occured When Trying To Login Please Try Again"
            );
            setLoading(false);
        }
    }
    return {
        formState,
        handleLogin,
        error,
        loading
    }
}

export default useHandleLogin;
