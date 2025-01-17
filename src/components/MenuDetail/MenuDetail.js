import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFood } from '../../redux/actions/foodActions';
import { connect } from 'react-redux';
import './MenuDetail.css';
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material';
import { addToCart } from '../../redux/actions/cartActions';

const MenuDetail = (props) => {
    const {id,name, description, image, price} = props.food;
    const {foodId} = useParams();
    const [count, setCount] = useState(1);

    useEffect(()=>{
        props.getFood(foodId);
    }, []);


    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    const handleDecreaseCount = () => {
        if(count > 1){
            setCount(count -1 );
        }
    }

    return (
        <>
            <div className='container'>
                <div className='menu-detail'>
                <div className='menu-left'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className='left-bottom'>
                        <h1 className='price'>${price}</h1>
                        <div className='quantity-box'>
                            <span className='decrease' onClick={handleDecreaseCount}><Remove /></span>
                            <span className='count'>{count}</span>
                            <span className='increase' onClick={handleIncreaseCount}><Add /></span>
                        </div>
                    </div>
                     <div className='cart-button'>
                        <button onClick={()=>props.addToCart(id, count)}><ShoppingCartOutlined/>Add</button>
                     </div>
                     <div className='menu-images'>
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                     </div>
                </div>
                <div className='menu-right'>
                    <div className='s-menu-image'>
                        <img src={image} alt="" width='100%' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        food:state.foodReducer.food,
    }
}

const mapDispatchToProps = {
    getFood:getFood,
    addToCart:addToCart
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetail);