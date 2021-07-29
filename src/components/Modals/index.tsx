import MakeDelivery from "./MakeDelivery";
import ConfirmDeleteProduct from "./ConfirmDeleteProduct";
import ModifyProductDetails from "./ModifyProductDetails";
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
    </>
);

export default index;
