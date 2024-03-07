import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../store/slices/cartSlice';

const ProductsCard = (props) => {
    const {img, rating, title, price} = props;

    const [isAdded, setIsAdded] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = () => {

        const item = { ...props};
        dispatch(addItems(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

  return (
    <>
    <div className='product_card'>
    <figure>
        <img src={img} alt='item-img' />
        
    </figure>
    </div>
    </>
  )
}

export default ProductsCard
