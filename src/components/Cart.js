import React from 'react';

export default function Cart(props) {
  const { cartProducts, addToCart, reduceQuantity,removeProduct } = props;
  
  const totalCost = cartProducts.reduce((a, c) => a + c.quantity * c.price, 0);
  const discount = totalCost >= 100 
  const finalPrice = totalCost >= 100 ? totalCost - (totalCost * 10 / 100) : totalCost;
  
const buyout= () => {
    console.log(cartProducts,finalPrice);
}



  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartProducts.length === 0 && <div>Cart is empty</div>}
        {cartProducts.map((product) => (
          <div key={product.id} className="row">
            <div className="col-2">{product.name}</div>
            <div className='col-2'>
            <button onClick={()=> removeProduct(product)} className="badge">
            remove {product.name}
            </button>
            </div>
            <div className="col-2">
              <button onClick={() => reduceQuantity(product)} className="add">
                -
              </button>{' '}
              <button onClick={() => addToCart(product)} className="remove">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              quantity{product.quantity} x {product.price} euro
              
            </div>
          
          </div>
        ))}
        {discount && (<div>
            Total price is over 100 euro. You have 10% discount.
        </div>)}
          <div>
                <button onClick={() => buyout()} className="badge">BUYOUT</button>total price :{finalPrice}
            </div>
        </div>
    </aside>
  )
}
