import "./layout/ConfirmCancelDelivery.css";
import { 
    Card, 
    Container,
    Button
} from "react-bootstrap";
import { Title, Text } from "components";
import { useSelector, useDispatch } from "react-redux";
import { DeliveryProps } from "types/Delivery";
import { History } from "history";
import { useHandleCancelDelivery } from "hooks";

const ConfirmCancelDelivery:React.FC<{ history?: History }> = ({ history }) =>{
    const delivery:DeliveryProps = 
        useSelector((state: any) => state.deliveryReducer);
    const showConfirmCancelDeliveryModal = 
        useSelector((state: any) => state.confirmCancelDeliveryReducer);
    const dispatch = useDispatch();
    const { handleCancelDelivery } = useHandleCancelDelivery(history, delivery.id);
    return (
        <>
            {
                showConfirmCancelDeliveryModal && (
                    <div className="confirm-cancel-delivery-container">
                        <Card className="confirm-cancel-delivery-card">
                            <Card.Header>
                                <Title>Confirm Cancel Delivery</Title>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Text>
                                        Do You Want To Cancel The Delivery
                                        With The ID: {delivery.id}
                                    </Text>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="success"
                                    className="mx-1"
                                    onClick={handleCancelDelivery}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() =>{
                                        dispatch({
                                            type: "TOGGLE_CONFIRM_CANCEL_DELIVERY_MODAL",
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

export default ConfirmCancelDelivery;
