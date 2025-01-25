import React, { createContext, useContext, useEffect, useState } from 'react';
import { getDataBaseCart } from '../../ManageDB/ManageDB';
import {foodsContext} from '../FoodsProvider/FoodsProvider';

export const CartContext = createContext();

const CartProvider = props => {
    const [carts, setCarts] = useState([]);
    const foods = useContext(foodsContext);
    const {children} = props;
    useEffect(() => {
        const savedCarts = getDataBaseCart();
        const foodIds = Object.keys(savedCarts);
        const previOusProducts = foodIds.map(itemId => {
        const currentFood = foods.find(item => item.id === Number(itemId));
            currentFood.amount = savedCarts[itemId];
            return currentFood;
        });
        setCarts(previOusProducts);
    }, []);
    return (
        <CartContext.Provider value={[carts, setCarts]}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;