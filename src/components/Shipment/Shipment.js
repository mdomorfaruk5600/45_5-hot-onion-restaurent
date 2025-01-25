import React, { useContext, useState } from 'react';
import './Shipment.css';
import CartItem from '../CartItem/CartItem';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './../../Helper/CartProvider/CartProvider';
import { ShipmentContext } from './../../Helper/ShipmentProvider/ShipmentProvider';
import { placedOrder } from '../../ManageDB/ManageDB';

const Shipment = () => {
    const [carts, setCarts] = useContext(CartContext);
    const [data, setData] = useContext(ShipmentContext);
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const [isFilled, setIsFilled] = useState(false);
    const navigate = useNavigate();
    
    const price = carts.reduce((total, item) => total + (item.price * item.amount), 0);

    const tax = price / 10;
    
    let deliveryFee = 0;
    if(price > 50){
        deliveryFee = 0.00;
    }else {
        deliveryFee = 5.00;
    }

    const onSubmit = data => {
        const {delivery_option, road_no, address, business_name, instructor} = data;
        let isFilled = false;
        if(delivery_option === "" || road_no === "" || address === "" || business_name === "" || instructor === ""){
            isFilled = false;
        }else{
            isFilled = true;
            setData({...data, road:road_no});
        }
        setIsFilled(isFilled);
    }

    const handleOrderPlaced = () => {
        setCarts([]);
        placedOrder();
        navigate('/order-placed');
    }

    return (
        <div className='container'>
            <div className='shipment'>
                <div className='shipment-left'>
                    <div className='shipment-header'>
                        <h2>Edit Delivery Details</h2>
                        <hr/>
                    </div>
                    <div className='shipment-form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('delivery_option')} placeholder='Delivery to option' />
                            <input type="text" {...register('address')} placeholder='Road number'/>
                            <input type="text" {...register('road_no')} placeholder='Flat, suite or floor' />
                            <input type="text" {...register('business_name')} placeholder='Business name' />
                            <textarea cols="30" {...register('instructor')} rows="2" placeholder='Add delivery instructor'></textarea>
                            <input type="submit" value='Save & Continue' />
                        </form>
                    </div>
                </div>
                <div className='shipment-right'>
                    <div className='shipment-top'>
                        <div className='food-store'>
                            <span>From <h3>Gulshan Plaza Restaura GPR</h3></span>
                        </div>
                        <div className='delivery-time'>
                            <span>Arriving in 20-30 min</span>
                        </div>
                        <div className='delivery-address'>
                            <span>{watch('address')}</span>
                        </div>
                    </div>
                    <div className='shipment-middle'>
                        {
                            carts.map(item => <CartItem key={item.id} item={item} />)
                        }
                    </div>
                    <div className='shipment-bottom'>
                        <div className='cart'>
                            <div>
                                <span>Subtotal . {carts.length} item</span>
                                <span>${price.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Delivery Fee</span>
                                <span>${deliveryFee.toFixed(2)}</span>
                            </div>
                            <div className='total'>
                                <span className='title'>Total</span>
                                <span>${(price + tax + deliveryFee).toFixed(2)}</span>
                            </div>
                            <div>
                                <button className={!isFilled ? 'disabled':''} disabled={!isFilled ? 'disabled':''} onClick={handleOrderPlaced}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Shipment;