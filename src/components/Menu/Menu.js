import React, { useContext, useEffect, useState } from 'react';
import './Menu.css';
import MenuItem from '../MenuItem/MenuItem';
import { foodsContext } from '../../Helper/FoodsProvider/FoodsProvider';
import { CartContext } from '../../Helper/CartProvider/CartProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
    const [foods, setFoods] = useState([]);
    const serverFoods = useContext(foodsContext);
    const [carts] = useContext(CartContext);
    const [category, setCategory] = useState('lunch');
    const location = useLocation();
    const intent = location.state?.want;
    const navigate = useNavigate();
    
    useEffect(() => {
        if(intent){
            setCategory(intent);
        }
    }, []);

    useEffect(() => {
        const filteredFoods = serverFoods.filter(food => food.category === category);
        setFoods(filteredFoods);
    }, [,category]);

    const handleCategory = category => {
        setCategory(category);
    }

    const handleProceedToCheckout = () => {
        navigate('/shipment')
    }

    return (
        <div className='container menu'>
            <div className='menu-categories'>
                <ul>
                    <li><button className={category === 'breakfast' ? 'active':''} onClick={()=>handleCategory('breakfast')}>Breakfast</button></li>
                    <li><button className={category === 'lunch' ? 'active':''} onClick={()=>handleCategory('lunch')}>Lunch</button></li>
                    <li><button className={category === 'dinner' ? 'active':''} onClick={()=>handleCategory('dinner')}>Dinner</button></li>
                </ul>
            </div>
            <div className='menu-items'>
                { 
                  foods.map(food => <MenuItem key={food.id} food={food} />)
                }
            </div>
            <div className='checkout-food'>
                <button className={'checkout-button '+(carts.length <= 0 ? 'disabled':'')} disabled={carts.length <= 0 ? 'disabled':''} onClick={handleProceedToCheckout}>Checkout Your Food</button>
            </div>
        </div>
    );
};



export default Menu;