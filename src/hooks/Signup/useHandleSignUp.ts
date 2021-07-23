import { SignUpSchema, sendQuery } from "global";
import useHandleState from "./useHandleState";
import { History } from "history";

const useHandleSignUp = (history: History) =>{
    const formState = useHandleState();
    const handleSignUp = async() =>{
        try {
            const { error } = SignUpSchema.validate({
                fullName: formState.state.fullName,
                email: formState.state.email,
                password: formState.state.password
            });
            if(error)
                throw Error("Invalid Entered Data");
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
            console.log("Result: ", result.createAdminPanelUser);
            history.push("/products");
        } catch(err) {
            console.log(err);
        }
    }
    return {
        formState,
        handleSignUp
    }
}

export default useHandleSignUp;
