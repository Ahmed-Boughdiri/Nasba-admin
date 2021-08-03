import "./Page.css";
import { Navbar } from "components";
import Navigator from "./Navigator";
import { PageComponentProps } from "./Props";
import { Container } from "react-bootstrap";
import { useHandleProtectedRoute } from "hooks";

const Page:React.FC<PageComponentProps> = ({ children, history }) =>{
    useHandleProtectedRoute(history);
    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <Navigator history={history} />
                <div className="page-content-wrapper">
                    <div className="page-content-wrapper-container">
                        <Container className="page-children-container">
                            { children }
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
