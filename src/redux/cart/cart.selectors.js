import { createSelector } from "reselect";

//input selectors
const selectCart = state => state.cart;

//output selector - args : array(inputSelectors),transform function
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCardHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity,
            0
        )
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + (cartItem.quantity * cartItem.price),
            0
    )
)