import { Page, Title } from "components";
import { RouteComponentProps } from "react-router";
import { 
    useSetTabIndex, 
    useGetProducts,
    useHandleMoreInfo
} from "hooks";
import { 
    Table, 
    Badge, 
    Button,
    Card
} from "react-bootstrap";
import "./Product.css";

const Products:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(0);
    const products = useGetProducts();
    const handleMoreInfo = useHandleMoreInfo(history);
    return (
        <Page history={history}>
            <div className="products">
                <Card>
                    <Card.Header>
                        <Title>Products Inventory List:</Title>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Genre</th>
                                    <th>Label</th>
                                    <th>Price</th>
                                    <th>Size(s)</th>
                                    <th>Status</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) =>(
                                        <tr key={index}>
                                            <td className="products-table-column-container">
                                                <p>{index+1}</p>
                                            </td>
                                            <td className="products-table-column-container">
                                                <p>{product.name}</p>
                                            </td>
                                            <td className="products-table-column-container">
                                                <p>{product.genre}</p>
                                            </td>
                                            <td className="products-table-column-container">
                                                <p>{product.label}</p>
                                            </td>
                                            <td className="products-table-column-container">
                                                <p>{product.price}$</p>
                                            </td>
                                            <td className="products-table-column-container">
                                                <p>{product.size}</p>
                                            </td>
                                            <td className="products-table-column-container">
                                                <Badge bg="success">{product.status}</Badge>
                                            </td>
                                            <td>
                                                <Button 
                                                    variant="primary" 
                                                    style={{ 
                                                        width: "100%" 
                                                    }}
                                                    onClick={() =>handleMoreInfo(product)}
                                                >
                                                    More Info
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </Page>
    );
}

export default Products;