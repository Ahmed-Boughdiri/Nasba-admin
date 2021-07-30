import MakeDelivery from "./MakeDelivery";
import ConfirmDeleteProduct from "./ConfirmDeleteProduct";
import ModifyProductDetails from "./ModifyProductDetails";
import ConfirmDeliveryModal from "./ConfirmDeliveryModal";
import ConfirmCancelDelivery from "./ConfirmCancelDelivery";
import EditDeliveryInfoModal from "./EditDeliveryInfoModal";
import { ModalProps } from "./Props";

const index:React.FC<ModalProps> = ({ 
    type,
    history
}) =>(
    <>
        {
            (type === "make-delivery") && <MakeDelivery />
        }
        {
            (type === "confirm-delete-product") && <ConfirmDeleteProduct history={history} />
        }
        {
            (type === "modify-product-details") && <ModifyProductDetails history={history} />
        }
        {
            (type === "confirm-delivery") && <ConfirmDeliveryModal history={history} />
        }
        {
            (type === "confirm-cancel-delivery") && <ConfirmCancelDelivery history={history} />
        }
        {
            (type === "edit-delivery-info") && <EditDeliveryInfoModal history={history} />
        }
    </>
);

export default index;
