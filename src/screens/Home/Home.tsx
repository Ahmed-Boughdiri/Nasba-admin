import { useHandleTryToAuthenticate } from "hooks";
import { Loader } from "components";
import { History } from "history";

interface HomeProps {
    history: History;
}

const Home:React.FC<HomeProps> = ({ history }) =>{
    useHandleTryToAuthenticate(history);
    return (
        <Loader type="SCREEN" />
    );
}

export default Home;
