import { 
    getUserTokenFromLocalStorage,
    saveTokenOnLocalStorage,
    saveUserCredentialsOnLocalStorage
} from "utils";
import { History } from "history";
import { sendQuery } from "global";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useHandleTryToAuthenticate = (history: History) =>{
    const dispatch = useDispatch();
    const tryToAuthenticate = async() =>{
        try {
            const token = getUserTokenFromLocalStorage();
            if(!token)
                history.push("/login");
            const result = await sendQuery(`
                query {
                    adminPanelTokenAuthenticate(token: "${token}") {
                        success,
                        approved,
                        id,
                        email,
                        fullName,
                        token
                    }
                }
            `);
            if(
                !result.adminPanelTokenAuthenticate.success ||
                !result.adminPanelTokenAuthenticate.approved
            )
                history.push("/login");
            await saveTokenOnLocalStorage(result.adminPanelTokenAuthenticate.token);
            await saveUserCredentialsOnLocalStorage({
                fullName: result.adminPanelTokenAuthenticate.fullName,
                email: result.adminPanelTokenAuthenticate.email,
                id: result.adminPanelTokenAuthenticate.id
            });
            dispatch({
                type: "STORE_USER_DATA",
                payload: {
                    id: result.adminPanelTokenAuthenticate.id,
                    email: result.adminPanelTokenAuthenticate.email,
                    fullName: result.adminPanelTokenAuthenticate.fullName,
                    token: result.adminPanelTokenAuthenticate.token
                }
            });
            history.push("/products");
        } catch(err) {
            history.push("/login");
        }
    }
    useEffect(() =>{
        tryToAuthenticate();
    }, []);
}

export default useHandleTryToAuthenticate;
