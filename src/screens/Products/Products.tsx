import { Page } from "components";
import { RouteComponentProps } from "react-router";
import { 
    useSetTabIndex, 
    useGetProducts,
    useHandleMoreInfo
} from "hooks";
import { 
    Table, 
    Badge, 
    Button 
} from "react-bootstrap";


const Products:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(0);
    const products = useGetProducts();
    const handleMoreInfo = useHandleMoreInfo(history);
    return (
        <Page history={history}>
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
                                <td className="tabel-column-container">
                                    <p>{index+1}</p>
                                </td>
                                <td className="tabel-column-container">
                                    <p>{product.name}</p>
                                </td>
                                <td className="tabel-column-container">
                                    <p>{product.genre}</p>
                                </td>
                                <td className="tabel-column-container">
                                    <p>{product.label}</p>
                                </td>
                                <td className="tabel-column-container">
                                    <p>{product.price}$</p>
                                </td>
                                <td className="tabel-column-container">
                                    <p>{product.size}</p>
                                </td>
                                <td className="tabel-column-container">
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
        </Page>
    );
}

export default Products;
