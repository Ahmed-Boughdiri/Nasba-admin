import { History } from "history";

export interface ModalProps {
    type: "make-delivery" | "confirm-delete-product" | "modify-product-details",
    history?: History
}
