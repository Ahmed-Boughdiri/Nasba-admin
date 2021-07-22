import { AnyAction } from "redux";

const initialState = 0;

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state=initialState,
    action: AnyAction
) {
    switch(action.type) {
        case "SET_TAB":
            return state = action.payload;
        default:
            return state;
    }
}
