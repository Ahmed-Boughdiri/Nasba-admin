import { createStore, combineReducers } from "redux";
import tabReducer from "reducers/TabReducer";
import productReducer from "reducers/ProductReducer";

export default createStore(
    combineReducers({
      tabReducer: tabReducer,
      productReducer
    })
);
