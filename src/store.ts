import { createStore, combineReducers } from "redux";
import tabReducer from "reducers/TabReducer";
import productReducer from "reducers/ProductReducer";
import deliveryReducer from "reducers/DeliveryReducer";
import userReducer from "reducers/UserReducer";

export default createStore(
    combineReducers({
      tabReducer,
      productReducer,
      deliveryReducer,
      userReducer
    })
);
