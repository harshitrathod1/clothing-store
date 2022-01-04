//Function that add items to cart
export const addItemsToCart = (cartItems, cartItemToAdd) => {
    //check if the item is already present in the cart    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
    //if present then return new array while only increasing the quantity of match item
    if (existingCartItem) {

        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity + 1} 
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity : 1}]
}

export const removeItemsFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id );
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity : cartItem.quantity - 1}
        : cartItem
    ); 
}