import React from 'react';
import Product from './Product';

export default function Main({ products, addToCart }) {
  return (
    <main className='block col-2'>
      <h2>products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart}></Product>
        ))}
      </div>
    </main>
  );
};
