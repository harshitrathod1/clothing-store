import { createSelector } from "reselect";

//input selectors
const selectCart = state => state.cart;

//output selector - args : array(inputSelectors),transform function
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity,
            0
    )
)