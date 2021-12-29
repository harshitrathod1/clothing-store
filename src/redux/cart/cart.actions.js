import CartActionTypes from './cart.types';

//A function that actually changes the state for particular reducer by returning fresh state
//object
const toggleCartHidden = () => {
    return({
        type : CartActionTypes.TOGGLE_CART_HIDDEN,
    })
}

export const addItem = (item) => {
    return ({
        type : CartActionTypes.ADD_ITEM,
        payload : item
    })
}

export default toggleCartHidden;