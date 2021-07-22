import { Page } from "components";
import { RouteComponentProps } from "react-router";
import { useSetTabIndex } from "hooks";

const Deliveries:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(1);
    return (
        <Page history={history}>
            <h1>This is The Deliveries List Page</h1>
        </Page>
    );
}

export default Deliveries;
