import "./layout/MakeDelivery.css";
import { 
    Card, 
    Container,
    Row,
    Col,
    FormControl,
    Button
} from "react-bootstrap";
import { Title } from "components";
import { useHandleMakeDelivery } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { ProductProps } from "types/Product";

const MakeDelivery = () =>{
    const { 
        handleMakeDelivery,
        formState
    } = useHandleMakeDelivery();
    const product:ProductProps = useSelector((state: any) => state.productReducer);
    const showMakeDeliveryModal = useSelector((state: any) => state.makeDeliveryModalReducer);
    const dispatch = useDispatch();
    return (
        <>
            {
                showMakeDeliveryModal && (
                    <div className="make-delivery-container">
                        <Card className="make-delivery-card">
                            <Card.Header className="make-delivery-card-header">
                                <Title>Make A Delivery: </Title>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>First Name: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.firstName}
                                                onChange={formState.controllers.handleFirstName}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>Last Name: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.lastName}
                                                onChange={formState.controllers.handleLastName}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>Address: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.address}
                                                onChange={formState.controllers.handleAddress}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>City: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.city}
                                                onChange={formState.controllers.handleCity}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>Zip Code: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="number"
                                                value={formState.state.zipCode as number}
                                                onChange={formState.controllers.handleZipCode}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>Email: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.email}
                                                onChange={formState.controllers.handleEmail}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="make-delivery-form-item">
                                        <Col md={5}>
                                            <Title>Phone Number: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="number"
                                                value={formState.state.phoneNumber as number}
                                                onChange={formState.controllers.handlePhoneNumber}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="mx-1"
                                    onClick={() =>handleMakeDelivery(product.id)}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() =>{
                                        dispatch({
                                            type: "TOGGLE_MAKE_DELIVERY_MODAL",
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

export default MakeDelivery;
