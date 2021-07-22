import { Page } from "components";
import { RouteComponentProps } from "react-router";
import { useSetTabIndex } from "hooks";

const CompletedDeliveries:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(3);
    return (
        <Page history={history}>
            <h1>This is The Completed Deliveries List Page</h1>
        </Page>
    );
}

export default CompletedDeliveries;
