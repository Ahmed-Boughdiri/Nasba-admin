import useHandleFormState from "./useHandleFormState";
import { sendQuery } from "global";
import { History } from "history";
import { useDispatch } from "react-redux";
import { 
    saveTokenOnLocalStorage,
    saveUserCredentialsOnLocalStorage
} from "utils";

const useHandleLogin = (history: History) =>{
    const formState = useHandleFormState();
    const dispatch = useDispatch();
    const handleLogin = async() =>{
        try {
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
                throw Error("User Not Aprroved Yet");
            }
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    return {
        formState,
        handleLogin
    }
}

export default useHandleLogin;
