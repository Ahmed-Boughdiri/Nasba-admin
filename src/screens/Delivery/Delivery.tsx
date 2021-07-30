import { 
    Page, 
    Title,
    Modal
} from "components";
import { RouteComponentProps } from "react-router";
import "./Delivery.css";
import { 
    Card, 
    Row, 
    Col,
    FormControl,
    Button
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DeliveryProps } from "types/Delivery";

const Delivery:React.FC<RouteComponentProps> = ({ history }) =>{
    const delivery:DeliveryProps = useSelector((state: any) => state.deliveryReducer);
    const dispatch = useDispatch();
    return (
        <Page history={history}>
            <div className="delivery">
                <Card>
                    <Card.Header>
                        <Title fontSize="25px">Delivery Details:</Title>
                    </Card.Header>
                    <Card.Body>
                        <Title fontSize="22px">Customer Details:</Title>
                        <Row className="delivery-details-table-item first">
                            <Col md={3}>
                                <Title fontSize="18px">Customer Full Name</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={`${delivery.firstName} ${delivery.lastName}`}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Delivery Address</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.address as string}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Delivery City</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.city as string}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Delivery Zip Code</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.zipCode as number}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Customer Email</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.email as string}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Customer Phone Number</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.phoneNumber as number}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item last">
                            <Col md={3}>
                                <Title fontSize="18px">Delivery Status</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.status as string}
                                />
                            </Col>
                        </Row>
                        <Title fontSize="22px">Product Details:</Title>
                        <Row className="delivery-details-table-item first">
                            <Col md={3}>
                                <Title fontSize="18px">Product Name</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.productName as string}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Product Label</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.productLabel as string}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Product Price</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={`${delivery.productPrice}$`}
                                />
                            </Col>
                        </Row>
                        {
                            delivery.productDiscountPrice && (
                                <Row className="delivery-details-table-item">
                                    <Col md={3}>
                                        <Title fontSize="18px">Product Discount Price</Title>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl 
                                            disabled
                                            value={`${delivery.productDiscountPrice}$`}
                                        />
                                    </Col>
                                </Row>
                           )
                        }
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Product Size</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.productSize as string}
                                />
                            </Col>
                        </Row>
                        <Row className="delivery-details-table-item">
                            <Col md={3}>
                                <Title fontSize="18px">Product Genre</Title>
                            </Col>
                            <Col md={9}>
                                <FormControl 
                                    disabled
                                    value={delivery.productGenre as string}
                                />
                            </Col>
                        </Row>
                        <div className="delivery-details-product-thumbnails">
                            {
                                delivery.productThumbnail.map(thumbnail =>(
                                    <div className="delivery-details-product-thumbnail-container">
                                        <img 
                                            src={`http://localhost:5000/${thumbnail}`}
                                            alt="" 
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </Card.Body>
                </Card>
                <Card.Footer>
                    <Button 
                        variant="success"
                        className="mx-1"
                        onClick={() =>{
                            dispatch({
                                type: "TOGGLE_CONFIRM_DELIVERY_MODAL",
                                payload: true
                            })
                        }}
                    >
                        Successfully Delivered
                    </Button>
                    <Button 
                        variant="primary"
                        className="mx-1"
                        onClick={() =>{
                            dispatch({
                                type: "TOGGLE_EDIT_DELIVERY_MODAL",
                                payload: true
                            })
                        }}
                    >
                        Edit Info
                    </Button>
                    <Button 
                        variant="danger"
                        className="mx-1"
                        onClick={() =>{
                            dispatch({
                                type: "TOGGLE_CONFIRM_CANCEL_DELIVERY_MODAL",
                                payload: true
                            })
                        }}
                    >
                        Cancel Delivery
                    </Button>
                </Card.Footer>
            </div>
            <Modal 
                type="confirm-delivery" 
                history={history}
            />
            <Modal 
                type="confirm-cancel-delivery"
                history={history} 
            />
            <Modal 
                type="edit-delivery-info" 
                history={history}
            />
        </Page>
    )
}

export default Delivery;
 