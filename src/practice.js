let items = {
  'cart' : {
    'quantity' : 2,
    'hidden' : true,
    'cartItems' : [11,22,33,44]
  },
  'user' : {
    'name' : 'Alex',
    'age' : 22,
    'lang' : 'EN'
  }
};

let { cart: { cartItems } } = items;

console.log(cartItems);

