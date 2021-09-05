import "./Login.css";
import { 
    Card, 
    Container,
    FormControl,
    Button
} from "react-bootstrap";
import { Title, Error, Loader } from "components";
import { useHandleLogin } from "hooks";
import { History } from "history";

interface LoginProps {
    history: History;
}

const Login:React.FC<LoginProps> = ({ history }) =>{
    const {
        formState,
        handleLogin,
        error,
        loading
    } = useHandleLogin(history);
    return (
        <div className="login">
            {
                error && (
                    <Error 
                        type="alert"
                        errorMsg={error}
                        width={400}
                    />
                )
            }
            {
                loading ? (
                    <Loader type="SCREEN" />
                ) : (
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
                )
            } 
        </div>
    );
}

export default Login;
