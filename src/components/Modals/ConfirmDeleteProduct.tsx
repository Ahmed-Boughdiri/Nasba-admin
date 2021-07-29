import "./layout/ConfirmDeleteProduct.css";
import { 
    Card, 
    Container,
    Button
} from "react-bootstrap";
import { Title, Text } from "components";
import { useSelector, useDispatch } from "react-redux";
import { ProductProps } from "types/Product";
import { useHandleDeleteProduct } from "hooks";
import { History } from "history";

const ConfirmDeleteProduct:React.FC<{ history?: History }> = ({ history }) =>{
    const product:ProductProps = 
        useSelector((state: any) => state.productReducer);
    const showConfirmDeleteProductModal = 
        useSelector((state: any) => state.confirmDeleteProductReducer);
    const dispatch = useDispatch();
    const { handleDeleteProduct } = 
        useHandleDeleteProduct(history, product.id);
    return (
        <>
            {
                showConfirmDeleteProductModal && (
                    <div className="confirm-delete-product-container">
                        <Card className="confirm-delete-product-card">
                            <Card.Header>
                                <Title>Delete Product Confirmation</Title>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Text>
                                        Do You Want To Delete 
                                        The Product With The ID: {product.id}
                                    </Text>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="mx-1"
                                    onClick={handleDeleteProduct}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() =>{
                                        dispatch({
                                            type: "TOGGLE_CONFIRM_DELETE_PRODUCT_MODAL",
                                            payload: false
                                        })
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            }
        </>
    );
}

export default ConfirmDeleteProduct;
