import { AnyAction } from "redux";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state=initialState,
    action: AnyAction
) {
    switch(action.type) {
        case "STORE_PRODUCT_DATA":
            return state = action.payload
        default:
            return state;
    }
}
