import React from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../redux/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({id, quantity}));
    };
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
            <p>{item.title} - ${item.price} </p>
        </div>
      ))}
    </div>
  )
}

export default Cart
