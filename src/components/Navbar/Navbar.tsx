import "./Navbar.css";
import { Container } from "react-bootstrap";
import { Title, Text } from "components";
import { useGetUserCredentials } from "hooks";

import logo from "assets/logo.png";

const Navbar = () =>{
    const { user } = useGetUserCredentials();
    return (
        <div className="navbar">
            <Container className="navbar-container">
                <div className="navbar-brand">
                    <img 
                        src={logo}
                        alt="nasba-logo" 
                    />
                    <Title 
                        fontSize="25px"
                        className="nasba-brand-title"
                    >
                        asba
                    </Title>
                </div>
                <div className="navbar-email">
                    <Text 
                        fontSize="18px"
                        textAlign="right"
                    >
                        {user.email}
                    </Text>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
