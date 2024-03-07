import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


const App = () => {
  return (
    <Provider store={store}>
    <div>
      <ProductList products={products} />
      <Cart />
    </div>
    </Provider>
  );
};

export default App

