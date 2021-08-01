import "./layout/EditDeliveryInfoModal.css";
import { 
    Card, 
    Container,
    Row,
    Col,
    FormControl,
    Button
} from "react-bootstrap";
import { Title } from "components";
import { History } from "history";
import { useSelector, useDispatch } from "react-redux";
import { useHandleEditDeliveryInfo } from "hooks";
import { DeliveryProps } from "types/Delivery";

const EditDeliveryInfoModal:React.FC<{ history?: History }> = ({ history }) =>{
    const showEditInfoModal = 
        useSelector((state: any) => state.editDeliveryInfoReducer);
    const delivery:DeliveryProps = 
        useSelector((state: any) => state.deliveryReducer);
    const dispatch = useDispatch();
    const { 
        formState,
        handleEditDeliveryInfo
    } = useHandleEditDeliveryInfo(history, delivery.id);
    return (
        <>
            {
                showEditInfoModal && (
                    <div className="edit-delivery-info-modal-container">
                        <Card>
                            <Card.Header>
                                <Title>Edit Delivery Details</Title>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item">
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
                                    <Row className="edit-delivery-info-item status">
                                        <Col md={5}>
                                            <Title>Status: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <select
                                                value={formState.state.status}
                                                onChange={formState.controllers.handleStatus}
                                            >
                                                <option value="PENDING">PENDING</option>
                                                <option value="COMPLETED">COMPLETED</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="edit-delivery-info-item">
                                        <Col md={5}>
                                            <Title>Product ID: </Title>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                type="text"
                                                value={formState.state.productID}
                                                onChange={formState.controllers.handleProductID}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="mx-1"
                                    onClick={handleEditDeliveryInfo}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() =>{
                                        dispatch({
                                            type: "TOGGLE_EDIT_DELIVERY_MODAL",
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

export default EditDeliveryInfoModal;
