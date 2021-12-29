import CartActionTypes from "./cart.types";
import { addItemsToCart } from './cart.utils'
//Intial State
const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

//Actual Reducer Function : to show cart dropdown or not
const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        //shows cart dropdown when clicked on it
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { 
                ...state,
                hidden : !state.hidden
            }
        
        //add item to cart drop drown when clicked on items from collections
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItemsToCart(state.cartItems, action.payload)
            }
        default :
            return state;
    }
}

export default cartReducer;