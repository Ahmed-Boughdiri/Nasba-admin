import { SignUpSchema, sendQuery } from "global";
import useHandleState from "./useHandleState";
import { History } from "history";
import { useState } from "react";
import {
    saveTokenOnLocalStorage,
    saveUserCredentialsOnLocalStorage
} from "utils";
import { useDispatch } from "react-redux";

const useHandleSignUp = (history: History) =>{
    const formState = useHandleState();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const handleSignUp = async() =>{
        try {
            setLoading(true);
            const { error } = SignUpSchema.validate({
                fullName: formState.state.fullName,
                email: formState.state.email,
                password: formState.state.password
            });
            if(error)
                throw setError("Invalid Entered Data");
            const result = await sendQuery(`
                mutation {
                    createAdminPanelUser(adminPanelUser: {
                        fullName: "${formState.state.fullName}",
                        email: "${formState.state.email}",
                        password: "${formState.state.password}"
                    }) {
                        fullName,
                        email,
                        id,
                        role
                    }
                }
            `);
            await saveTokenOnLocalStorage(result.createAdminPanelUser.token);
            await saveUserCredentialsOnLocalStorage({
                fullName: result.createAdminPanelUser.fullName,
                email: result.createAdminPanelUser.email,
                id: result.createAdminPanelUser.id
            });
            dispatch({
                type: "STORE_USER_DATA",
                payload: {
                    id: result.createAdminPanelUser.id,
                    email: result.createAdminPanelUser.email,
                    fullName: result.createAdminPanelUser.fullName,
                    token: result.createAdminPanelUser.token
                }
            });
            history.push("/products");
        } catch(err:any) {
            setError(
                err.response?.data.errors[0].message ||
                "An Error Has Occured While Trying To Signup Please Try Again"
            );
            setLoading(false);
        }
    }
    return {
        formState,
        handleSignUp,
        error,
        loading
    }
}

export default useHandleSignUp;
