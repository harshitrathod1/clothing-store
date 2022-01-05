import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //Price in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_RupYo1zVqlGQTwUt8I1WcY4F0036yAvLAg';
    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    } 

    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'Clothing Store Ltd.'
            billingAddress
            shippingAddress
            image= 'https://stripe.com/img/documentation/checkout/marketplace.png' 
            description= {`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;