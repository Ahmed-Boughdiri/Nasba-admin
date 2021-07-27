import { Page } from "components";
import { RouteComponentProps } from "react-router";
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
import { useSelector } from "react-redux";
import { ProductProps } from "types/Product";

import tshirt from "assets/levis-tshirt.png";

const Product:React.FC<RouteComponentProps> = ({ history }) =>{
    useSetTabIndex(0);
    const product:ProductProps = useSelector((state: any) => state.productReducer);
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
                                            <div className="product-details-thumbnails">
                                                {
                                                    product.thumbnail.map(thumbnail =>(
                                                        <div className="product-details-thumbnail-container">
                                                            <img 
                                                                src={`http://localhost:5000/${thumbnail}`}
                                                                alt="" 
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>
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
                        >
                            Make a Delivery
                        </Button>
                        <Button 
                            variant="danger"
                            className="mx-1"
                        >
                            Delete Product
                        </Button>
                        <Button 
                            variant="success"
                            className="mx-1"
                        >
                            Modify Details
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </Page>
    )
}

export default Product;
