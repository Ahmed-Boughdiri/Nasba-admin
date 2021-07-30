import { History } from "history";

export interface ModalProps {
    type: 
        "make-delivery" | 
        "confirm-delete-product" | 
        "modify-product-details" |
        "confirm-delivery" |
        "confirm-cancel-delivery" |
        "edit-delivery-info",
    history?: History
}
