import { History } from "history";
import { 
    getUserTokenFromLocalStorage,
    saveTokenOnLocalStorage,
    saveUserCredentialsOnLocalStorage
} from "utils";
import { sendQuery } from "global";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useProductedRoute = (history: History) =>{
    const dispatch = useDispatch();
    const handleProtectedRoute = async() =>{
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
            console.log("Result: ", result.adminPanelTokenAuthenticate);
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
            return true;
        } catch(err) {
            history.push("/login");
        }
    }
    useEffect(() =>{
        handleProtectedRoute();
    }, [])
}

export default useProductedRoute;
