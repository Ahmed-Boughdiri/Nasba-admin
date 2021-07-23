import { createStore, combineReducers } from "redux";
import tabReducer from "reducers/TabReducer";
import productReducer from "reducers/ProductReducer";
import deliveryReducer from "reducers/DeliveryReducer";

export default createStore(
    combineReducers({
      tabReducer,
      productReducer,
      deliveryReducer
    })
);
