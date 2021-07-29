import "./layout/ModifyProductDetails.css";
import { 
    Card, 
    Container,
    Row,
    Col,
    FormControl,
    Button
} from "react-bootstrap";
import { Title } from "components";
import { useSelector, useDispatch } from "react-redux";
import { useHandleModifyProductDetails } from "hooks";
import { History } from "history";
import { ProductProps } from "types/Product";

const ModifyProductDetails:React.FC<{ history?: History }> = ({ history }) =>{
    const showModifyProductDetailsModal = 
        useSelector((state: any) => state.modifyProductDetailsReducer);
    const product:ProductProps = useSelector((state: any) => state.productReducer);
    const dispatch = useDispatch();
    const {
        formState,
        handleModifyProductDetails
    } = useHandleModifyProductDetails(history, product.id);
    return (
        <>
            {
                showModifyProductDetailsModal && (
                    <div className="modify-product-details">
                        <Card className="modify-product-details-card">
                            <Card.Header>
                                <Title>Modify Product Details</Title>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Product Name: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.productName}
                                                onChange={formState.controllers.handleProductName}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Product Label: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.productLabel}
                                                onChange={formState.controllers.handleProductLabel}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Product Price: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="number"
                                                value={formState.state.productPrice as number}
                                                onChange={formState.controllers.handleProductPrice}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Discount Price: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="number"
                                                value={formState.state.productDiscountPrice as number}
                                                onChange={formState.controllers.handleProductDiscountPrice}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Product Size: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.productSize}
                                                onChange={formState.controllers.handleProductSize}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Product Genre: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.productGenre}
                                                onChange={formState.controllers.handleProductGenre}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container status">
                                        <Col md={5}>
                                            <Title>Product Status: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <select>
                                                <option>AVAILABLE</option>
                                                <option>NOT AVAILABLE</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="modify-product-details-item-container">
                                        <Col md={5}>
                                            <Title>Thumbnail(s): </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="file"
                                                onChange={formState.controllers.handleProductThumbnail}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="mx-1"
                                    onClick={handleModifyProductDetails}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() =>{
                                        dispatch({
                                            type: "TOGGLE_MODIFY_PRODUCT_DETAILS_MODAL",
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

export default ModifyProductDetails;
