import React from 'react';
import './CartItem.css';
import { Add, Remove } from '@mui/icons-material';

const CartItem = props => {
    const {id,image, name, amount} = props.item;
    
    return (
        <div className='cart-item'>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='info'>
                <span className='name'>{name.slice(0, 12)}</span>
                <span style={{fontSize:'14px', color:'#8c8c8c'}}>Delivery Free</span>
            </div>
            <div className='item-modify'>
                <span >
                    <Remove />
                </span>
                <span className='amount-modify'>{amount}</span>
                <span >
                    <Add />
                </span>
            </div>
        </div>
    );
};

export default CartItem;