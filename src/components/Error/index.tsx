import ErrorScreen from "./ErrorScreen";
import Error from "./Error";
import Alert from "./Alert";
import { ErrorProps } from "./Props";

const index:React.FC<ErrorProps> = ({ 
    type, 
    errorMsg="",
    width
}) =>(
    <>
        {
            (type === "screen") && <ErrorScreen />
        }
        {
            (type === "component") && <Error errorMsg={errorMsg} />
        }
        {
            (type === "alert") && <Alert errorMsg={errorMsg} width={width} />
        }
    </>
);

export default index;
