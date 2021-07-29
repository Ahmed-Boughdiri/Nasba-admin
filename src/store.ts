import { createStore, combineReducers } from "redux";
import tabReducer from "reducers/TabReducer";
import productReducer from "reducers/ProductReducer";
import deliveryReducer from "reducers/DeliveryReducer";
import userReducer from "reducers/UserReducer";
import makeDeliveryModalReducer from "reducers/MakeDeliveryModalReducer";
import confirmDeleteProductReducer from "reducers/ConfirmDeleteProductReducer";
import modifyProductDetailsReducer from "reducers/ModifyProductDetailsReducer";

export default createStore(
    combineReducers({
      tabReducer,
      productReducer,
      deliveryReducer,
      userReducer,
      makeDeliveryModalReducer,
      confirmDeleteProductReducer,
      modifyProductDetailsReducer
    })
);
