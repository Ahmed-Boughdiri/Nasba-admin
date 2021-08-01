import { createStore, combineReducers } from "redux";
import tabReducer from "reducers/TabReducer";
import productReducer from "reducers/ProductReducer";
import deliveryReducer from "reducers/DeliveryReducer";
import userReducer from "reducers/UserReducer";
import makeDeliveryModalReducer from "reducers/MakeDeliveryModalReducer";
import confirmDeleteProductReducer from "reducers/ConfirmDeleteProductReducer";
import modifyProductDetailsReducer from "reducers/ModifyProductDetailsReducer";
import confirmDeliveryReducer from "reducers/ConfirmDeliveryReducer";
import confirmCancelDeliveryReducer from "reducers/ConfirmCancelDeliveryReducer";
import editDeliveryInfoReducer from "reducers/EditDeliveryInfoReducer";
import completedDeliveryReducer from "reducers/CompletedDeliveryReducer";
import imageViewerReducer from "reducers/ImageViewerReducer";

export default createStore(
    combineReducers({
      tabReducer,
      productReducer,
      deliveryReducer,
      userReducer,
      makeDeliveryModalReducer,
      confirmDeleteProductReducer,
      modifyProductDetailsReducer,
      confirmDeliveryReducer,
      confirmCancelDeliveryReducer,
      editDeliveryInfoReducer,
      completedDeliveryReducer,
      imageViewerReducer
    })
);
