import "./layout/ConfirmDeliveryModal.css";
import { 
    Card, 
    Container,
    Button
} from "react-bootstrap";
import { Title, Text } from "components";
import { useSelector, useDispatch } from "react-redux";
import { DeliveryProps } from "types/Delivery";
import { History } from "history";
import { useHandleConfirmDelivery } from "hooks";

const ConfirmDeliveryModal:React.FC<{ history?: History }> = ({ history }) =>{
    const delivery:DeliveryProps = useSelector((state: any) => state.deliveryReducer);
    const showConfirmDeliveryModal = useSelector((state: any) => state.confirmDeliveryReducer);
    const dispatch = useDispatch();
    const { handleConfirmDelivery } = useHandleConfirmDelivery(history, delivery.id);
    return (
        <>
            {
                showConfirmDeliveryModal && (
                    <div className="confirm-delivery-modal-container">
                        <Card className="confirm-delivery-modal-card">
                            <Card.Header>
                                <Title>Confirm Delivery</Title>      
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Text>
                                        The Product With The Id {delivery.id} <br />
                                        is Successfully Delivered
                                    </Text>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="mx-1"
                                    onClick={handleConfirmDelivery}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() =>{
                                        dispatch({
                                            type: "TOGGLE_CONFIRM_DELIVERY_MODAL",
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

export default ConfirmDeliveryModal;
