import "./Login.css";
import { 
    Card, 
    Container,
    FormControl,
    Button
} from "react-bootstrap";
import { Title } from "components";
import { RouteComponentProps } from "react-router";
import { useHandleLogin } from "hooks";

const Login:React.FC<RouteComponentProps> = ({ history }) =>{
    const {
        formState,
        handleLogin
    } = useHandleLogin(history);
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
                                type="email"
                                value={formState.state.email}
                                onChange={formState.controllers.handleEmail}
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
                                type="password"
                                value={formState.state.password}
                                onChange={formState.controllers.handlePassword}
                            />
                        </div>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="primary"
                        className="mx-1"
                        size="lg"
                        onClick={handleLogin}
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
