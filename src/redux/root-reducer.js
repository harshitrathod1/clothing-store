import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this actual localStorage obj on browser

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducers";

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart'] // what needs to be persisted
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer
});

export default persistReducer(persistConfig,rootReducer);