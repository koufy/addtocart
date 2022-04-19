import React from 'react'

export default function Product(props) {
  const { product, addToCart } = props;
  return (
    <div>
      <h3>{product.name}</h3>
      <div>{product.price} euro</div>
      <div>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}