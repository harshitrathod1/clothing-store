//Function that add items to cart
export const addItemsToCart = (cartItems, cartItemToAdd) => {
    //check if the item is already present in the cart    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
    //if present then return new array while only increasing the quantity of match item
    if (existingCartItem) {

        return cartItems.map(cartItem =>
            cartItem.id = cartItemToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity + 1} 
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity : 1}]
}