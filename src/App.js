import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import { useState, useEffect } from 'react';

function App() {
  const { products } = data;
  const [cartProducts, setcartProducts] = useState([]);


  // --- local storage ---
  useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem('cartProducts'))
    console.log(existingProducts);
    console.log(localStorage.getItem('cartProducts'));
    if (existingProducts) {
      setcartProducts(existingProducts);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

  }, [cartProducts])


  const addToCart = (product) => {
    const exist = cartProducts.find((cartProduct) => cartProduct.id === product.id);

    if (exist && typeof exist.quantity && exist.quantity < product.stock) {
      const updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : cartProduct
      )
      setcartProducts(updatedCart);
    } else if (!exist) {
      setcartProducts((cart) => [...cart, { ...product, quantity: 1 }]);
    }
  };

  const reduceQuantity = (product) => {
    const exist = cartProducts.find((cartProduct) => cartProduct.id === product.id);
    if (exist.quantity === 1) {
      const updatedCart = cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
      setcartProducts(updatedCart);
    } else {
      const updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : cartProduct
      )
      setcartProducts(updatedCart);
    }
  };

  const removeProduct = (product) => {
    const updatedCart = cartProducts.filter((cartProduct) => cartProduct.id !== product.id);
    setcartProducts(updatedCart);
  };

  return (
    <div className="App">
      <div className="row">
        <Main products={products} addToCart={addToCart}></Main>
        <Cart
          cartProducts={cartProducts}
          addToCart={addToCart}
          reduceQuantity={reduceQuantity}
          removeProduct={removeProduct}
        ></Cart>
      </div>
    </div>
  );
}

export default App;