import { Alert as AlertComponent } from "react-bootstrap";
import { AlertComponentProps } from "./Props";

const Alert:React.FC<AlertComponentProps> = ({ errorMsg, width }) =>(
    <AlertComponent
        variant="danger"
        style={{
            width: width ? width as number : undefined,
            textAlign: "center",
            fontSize: 18
        }}
    >
        { errorMsg }
    </AlertComponent>
);

export default Alert;
