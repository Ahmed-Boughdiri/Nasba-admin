import "./Error.css";
import theme from "theme";
import { ErrorComponentProps } from "./Props";

const Error:React.FC<ErrorComponentProps> = ({ errorMsg }) =>(
    <div className="error-container">
        <img 
            src={theme.icons.error}
            alt="" 
        />
        <h4>
            { errorMsg }
        </h4>
    </div>
);

export default Error;
