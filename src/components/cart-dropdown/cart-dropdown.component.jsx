import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropDownContainer,CartItemsContainer,CartDropdownButton,EmptyMessageContainer } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, dispatch }) => {

    let navigate = useNavigate();
    
    function handleClick(){
        navigate('/checkout');
    };

    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                handleClick();
                dispatch(toggleCartHidden());
                }
                }>GO TO CHECKOUT</CartDropdownButton>
        </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);