import { 
    Page, 
    Modal,
    Carousel
} from "components";
import { useSetTabIndex } from "hooks";
import { Title } from "components";
import "./Product.css";
import { 
    Card, 
    Container,
    Row,
    Col,
    FormControl,
    Button
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ProductProps } from "types/Product";
import { History } from "history";

interface ProductComponentProps {
    history: History;
}

const Product:React.FC<ProductComponentProps> = ({ history }) =>{
    useSetTabIndex(0);
    const product:ProductProps = useSelector((state: any) => state.productReducer);
    const dispatch = useDispatch();
    return (
        <Page history={history}>
            <div className="product-info-card-container">
                <Card>
                    <Card.Header>
                        <Title fontSize="25px">Product Details</Title>
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Row className="product-details-table-item">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Name: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl  
                                        disabled={true}
                                        value={product.name as string}
                                    />
                                </Col>
                            </Row>
                            <Row className="product-details-table-item">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Label: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl  
                                        disabled={true}
                                        value={product.label as string}
                                    />
                                </Col>
                            </Row>
                            <Row className="product-details-table-item">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Price: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl  
                                        disabled={true}
                                        value={`${product.price}$`}
                                    />
                                </Col>
                            </Row>
                            {
                                product.discountPrice && (
                                    <Row className="product-details-table-item">
                                        <Col md={3}>
                                            <Title fontSize="18px">Product Discount Price: </Title>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl  
                                                disabled={true}
                                                value="45.00$"
                                            />
                                        </Col>
                                    </Row>
                                )
                            }
                            <Row className="product-details-table-item">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Size(s): </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl  
                                        disabled={true}
                                        value={product.size as string}
                                    />
                                </Col>
                            </Row>
                            <Row className="product-details-table-item">
                                <Col md={3}>
                                    <Title fontSize="18px">Product Genre(s): </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl  
                                        disabled={true}
                                        value={product.genre as string}
                                    />
                                </Col>
                            </Row>
                            <Row className="product-details-table-item">
                                <Col md={3}>
                                    <Title fontSize="18px">Availability Status: </Title>
                                </Col>
                                <Col md={9}>
                                    <FormControl  
                                        disabled={true}
                                        value={product.status}
                                    />
                                </Col>
                            </Row>
                            {
                                product.thumbnail && (
                                    <Row className="product-details-table-item">
                                        <Col md={12}>
                                            <Title fontSize="18px">Thumbnail(s): </Title>
                                        </Col>
                                        <Col md={12}>
                                            <Carousel thumbnails={product.thumbnail} />
                                        </Col>
                                    </Row>
                                )
                            }
                        </Container>
                    </Card.Body>
                    <Card.Footer>
                        <Button 
                            variant="primary"
                            className="mx-1"
                            onClick={() =>{
                                dispatch({
                                    type: "TOGGLE_MAKE_DELIVERY_MODAL",
                                    payload: true
                                })
                            }}
                        >
                            Make a Delivery
                        </Button>
                        <Button 
                            variant="danger"
                            className="mx-1"
                            onClick={() =>{
                                dispatch({
                                    type: "TOGGLE_CONFIRM_DELETE_PRODUCT_MODAL",
                                    payload: true
                                })
                            }}
                        >
                            Delete Product
                        </Button>
                        <Button 
                            variant="success"
                            className="mx-1"
                            onClick={() =>{
                                dispatch({
                                    type: "TOGGLE_MODIFY_PRODUCT_DETAILS_MODAL",
                                    payload: true
                                })
                            }}
                        >
                            Modify Details
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
            <Modal type="make-delivery" />
            <Modal 
                type="confirm-delete-product" 
                history={history}
            />
            <Modal 
                type="modify-product-details" 
                history={history} 
            />
        </Page>
    )
}

export default Product;
