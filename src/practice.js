let items = [
  {
    id : 1,
    qty : 2
  },
  {
    id : 2,
    qty : 3
  },
  {
    id : 3,
    qty : 1
  }
]

const itemCount = items.reduce((accumulated,cartItem) => accumulated + cartItem.qty,0);

console.log(itemCount);

