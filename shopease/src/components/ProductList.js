// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // Assuming the API response includes a quantity property for each product
        const productsWithQuantity = response.data.map(product => ({ ...product, quantity: 1 }));
        setProducts(productsWithQuantity);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Increment the quantity in the local state when adding to the cart
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id ? { ...prevProduct, quantity: prevProduct.quantity + 1 } : prevProduct
      )
    );
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title} - ${product.price}</p>
          <label>Quantity: {product.quantity}</label>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
