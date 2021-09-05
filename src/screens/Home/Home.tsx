import { useHandleTryToAuthenticate } from "hooks";
import { RouteComponentProps } from "react-router-dom";
import { Loader } from "components";

const Home:React.FC<RouteComponentProps> = ({ history }) =>{
    useHandleTryToAuthenticate(history);
    return (
        <Loader type="SCREEN" />
    );
}

export default Home;
