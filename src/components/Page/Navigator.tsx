import "./Navigator.css";
import { Text, Title } from "components";
import { navigatorLinks } from "global";
import { NavigatorComponentProps } from "./Props";
import { useNavigator, useGetUserCredentials } from "hooks";

import logo from "assets/logo.png";

const Navigator:React.FC<NavigatorComponentProps> = ({ history }) =>{
    const {
        activeTab,
        handleTabClick
    } = useNavigator(history);
    const { user } = useGetUserCredentials();
    return (
        <div className="navigator">
            <div className="navigator-header">
                <img 
                    src={logo}
                    alt="" 
                />
                <div className="navigator-header-text">
                    <Text 
                        fontSize="17px"
                        textAlign="center"
                    >
                        {user.email}
                    </Text>
                </div>
            </div>
            <div className="navigator-title-container">
                <Title 
                    color="yellow"
                    fontSize="19px"
                >
                    DASHBOARD
                </Title>
            </div>
            <div className="navigator-links-container">
                {
                    navigatorLinks.map((link, index) =>(
                        <div 
                            className={`navigator-link ${(activeTab === index) && "active"}`}
                            key={index}
                            onClick={() => handleTabClick(index, link.path)}
                        >
                            <div className="navigator-link-before"></div>
                            <div className="navigator-link-icon">
                                <img 
                                    src={link.icon as string}
                                    alt="nasba-products-icon" 
                                />
                            </div>
                            <Title fontSize="15px">
                                { link.name }
                            </Title>
                        </div>
                    ))
                }
            </div>
        </div>
    );    
}

export default Navigator;
