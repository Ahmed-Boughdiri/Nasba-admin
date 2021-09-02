import "./Signup.css";
import { 
    Card, 
    Container,
    FormControl,
    Button
} from "react-bootstrap";
import { Title, Error } from "components";
import { RouteComponentProps } from "react-router";
import { useHandleSignUp } from "hooks";

const Signup:React.FC<RouteComponentProps> = ({ history }) =>{
    const {
        formState,
        handleSignUp,
        error
    } = useHandleSignUp(history);
    return (
        <div className="signup">
            {
                error && (
                    <Error 
                        type="alert"
                        width={450}
                        errorMsg={error}
                    />
                )
            }
            <Card className="signup-form-container">
                <Card.Header>
                    <Title fontSize="22px">Sign Up: </Title>    
                </Card.Header>    
                <Card.Body>
                    <Container>
                        <div className="signup-form-input-group">
                            <Title 
                                fontSize="18px"
                                className="signup-form-label"
                            >
                                Full Name: 
                            </Title>
                            <FormControl 
                                placeholder="Enter Your Full Name"
                                type="text"
                                value={formState.state.fullName}
                                onChange={formState.controllers.handleFullName}
                            />
                        </div>
                        <div className="signup-form-input-group">
                            <Title 
                                fontSize="18px"
                                className="signup-form-label"
                            >
                                Email: 
                            </Title>
                            <FormControl 
                                placeholder="Enter Your Email"
                                type="text"
                                value={formState.state.email}
                                onChange={formState.controllers.handleEmail}
                            />
                        </div>
                        <div className="signup-form-input-group">
                            <Title 
                                fontSize="18px"
                                className="signup-form-label"
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
                        variant="success"
                        className="mx-1"
                        size="lg"
                        onClick={handleSignUp}
                    >
                        <Title 
                            className="signup-form-button-title"
                            fontSize="16px"
                        >
                            SIGN UP
                        </Title>
                    </Button>
                    <Button
                        variant="primary"
                        className="mx-1"
                        size="lg"
                    >
                        <Title 
                            className="signup-form-button-title"
                            fontSize="16px"
                        >
                            LOG IN
                        </Title>
                    </Button>
                </Card.Footer>
            </Card>  
        </div>
    );
}

export default Signup;
