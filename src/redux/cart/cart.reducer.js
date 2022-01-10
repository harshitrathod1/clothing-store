import CartActionTypes from "./cart.types";
import { addItemsToCart,removeItemsFromCart,removeItemFromCart } from './cart.utils'
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
        
        //Clears item from cart in checkout page
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems : removeItemsFromCart(state.cartItems,action.payload)
            }
        //Clear Items from cart when clicked on arrow button on checkout page
        case CartActionTypes.REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.payload)
            }

        default :
            return state;
    }
}

export default cartReducer;