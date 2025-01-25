import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MenuDetail.css';
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material';
import { foodsContext } from './../../Helper/FoodsProvider/FoodsProvider';
import { CartContext } from './../../Helper/CartProvider/CartProvider';
import {addToDataBase} from '../../ManageDB/ManageDB';

const MenuDetail = () => {
    const serverFoods = useContext(foodsContext);
    const [carts, setCarts] = useContext(CartContext);
    const [food, setFood] = useState({});
    const {foodId} = useParams();
    const [count, setCount] = useState(1);
    useEffect(() => {
        const food = serverFoods.find(item => item.id === Number(foodId));
        setFood(food);
    }, []);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    const handleDecreaseCount = () => {
        if(count > 1){
            setCount(count -1 );
        }
    }

    const handleAddToCart = food => {
        const sameProdouct = carts.find(item => item.id === food.id);
        let count = 1;
        let newCarts;
        if(sameProdouct){
            count = sameProdouct.amount + 1;
            sameProdouct.amount = count;
            const otherProducts = carts.filter(item => item.id !== sameProdouct.id);
            newCarts = [...otherProducts, sameProdouct];
        }else{
            food.amount = count;
            newCarts = [...carts, food];
        }
        setCarts(newCarts);
        addToDataBase(food.id, count);
    }


    return (
        <>
            <div className='container'>
                <div className='menu-detail'>
                <div className='menu-left'>
                    <h2>{food?.name}</h2>
                    <p>{food?.description}</p>
                    <div className='left-bottom'>
                        <h1 className='price'>${food?.price}</h1>
                        <div className='quantity-box'>
                            <span className='decrease' onClick={handleDecreaseCount}><Remove /></span>
                            <span className='count'>{count}</span>
                            <span className='increase' onClick={handleIncreaseCount}><Add /></span>
                        </div>
                    </div>
                     <div className='cart-button'>
                        <button onClick={()=>handleAddToCart(food)}><ShoppingCartOutlined/>Add</button>
                     </div>
                     <div className='menu-images'>
                        <div className='image'>
                            <img src={food?.image} alt="" />
                        </div>
                        <div className='image'>
                            <img src={food?.image} alt="" />
                        </div>
                        <div className='image'>
                            <img src={food?.image} alt="" />
                        </div>
                     </div>
                </div>
                <div className='menu-right'>
                    <div className='s-menu-image'>
                        <img src={food?.image} alt="" width='100%' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};



export default MenuDetail;