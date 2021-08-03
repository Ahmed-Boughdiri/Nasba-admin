import { useHandleTryToAuthenticate } from "hooks";
import { RouteComponentProps } from "react-router-dom";

const Home:React.FC<RouteComponentProps> = ({ history }) =>{
    useHandleTryToAuthenticate(history);
    return (
        <div>
            <h1>LOADING ...</h1>
        </div>
    );
}

export default Home;
