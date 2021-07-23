import "./Login.css";
import { 
    Card, 
    Container,
    FormControl,
    Button
} from "react-bootstrap";
import { Title } from "components";
import { RouteComponentProps } from "react-router";

const Login:React.FC<RouteComponentProps> = ({ history }) =>{
    return (
        <div className="login">
            <Card className="login-form-container">
                <Card.Header>
                    <Title fontSize="22px">Login: </Title>    
                </Card.Header>    
                <Card.Body>
                    <Container>
                        <div className="login-form-input-group">
                            <Title 
                                fontSize="18px"
                                className="login-form-label"
                            >
                                Email: 
                            </Title>
                            <FormControl 
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="login-form-input-group">
                            <Title 
                                fontSize="18px"
                                className="login-form-label"
                            >
                                Password: 
                            </Title>
                            <FormControl 
                                placeholder="Enter Your Password"
                            />
                        </div>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="primary"
                        className="mx-1"
                        size="lg"
                    >
                        <Title 
                            className="login-form-button-title"
                            fontSize="16px"
                        >
                            LOG IN
                        </Title>
                    </Button>
                    <Button
                        variant="success"
                        className="mx-1"
                        size="lg"
                        onClick={() =>history.push("/signup")}
                    >
                        <Title 
                            className="login-form-button-title"
                            fontSize="16px"
                        >
                            SIGN UP
                        </Title>
                    </Button>
                </Card.Footer>
            </Card>  
        </div>
    );
}

export default Login;
