import { 
    Page, 
    Title,
    Error,
    Loader
} from "components";
import { RouteComponentProps } from "react-router";
import { 
    useSetTabIndex, 
    useGetCompletedDeliveries,
    useHandleDeliveryMoreInfo
} from "hooks";
import { 
    Card, 
    Table,
    Button
} from "react-bootstrap";
import "./CompletedDeliveries.css";

const CompletedDeliveries:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(3);
    const {
        completedDeliveries,
        error,
        loading
    } = useGetCompletedDeliveries();
    const handleMoreInfo = useHandleDeliveryMoreInfo(history, true);
    return (
        <Page history={history}>
            <div className="completed-deliveries">
                {
                    loading ? (
                        <Loader type="COMPONENT" />
                    ) : (
                        <Card>
                            <Card.Header>
                                <Title>Deliveries List</Title>
                            </Card.Header>
                            <Card.Body>
                                {
                                    error ? (
                                        <Error 
                                            type="component"
                                            errorMsg={error}
                                        />
                                    ) : (
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Customer Full Name</th>
                                                    <th>Product Name</th>
                                                    <th>Product Label</th>
                                                    <th>Product Price</th>
                                                    <th>Size</th>
                                                    <th>Genre</th>
                                                    <th>More</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    completedDeliveries.map((delivery, index) =>(
                                                        <tr key={index}>
                                                            <td className="completed-deliveries-list-table-item">
                                                                <p>{index+1}</p>
                                                            </td>
                                                            <td className="completed-deliveries-list-table-item">
                                                                <p>{delivery.firstName} {delivery.lastName}</p>
                                                            </td>
                                                            <td className="completed-deliveries-list-table-item">
                                                                <p>{delivery.productName}</p>
                                                            </td>
                                                            <td className="completed-deliveries-list-table-item">
                                                                <p>{delivery.productLabel}</p>
                                                            </td>
                                                            <td className="completed-completed-deliveries-list-table-item">
                                                                <p>{delivery.productPrice}$</p>
                                                            </td>
                                                            <td className="completed-deliveries-list-table-item">
                                                                <p>{delivery.productSize}</p>
                                                            </td>
                                                            <td className="completed-deliveries-list-table-item">
                                                                <p>{delivery.productGenre}</p>
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    variant="primary"
                                                                    style={{
                                                                        width: "100%"
                                                                    }}
                                                                    onClick={() => handleMoreInfo(delivery)}
                                                                >
                                                                    More
                                                                </Button>
                                                            </td>
                                                        </tr>  
                                                    ))
                                                }
                                            </tbody>
                                        </Table>
                                    )
                                }
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </Page>
    );
}

export default CompletedDeliveries;
