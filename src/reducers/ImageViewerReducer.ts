import { AnyAction } from "redux";

const initialState = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state=initialState,
    action: AnyAction
) {
    switch(action.type) {
        case "TOGGLE_IMAGE_VIEWER_MODAL":
            return state = action.payload;
        default:
            return state;
    }
}
