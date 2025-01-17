import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    const {id, name, image, description, price} = props.food;
    return (
        <Link to={`/menu/${id}`} style={{textDecoration:'none', color:'black'}}>
            <div className='menu-item'>
                <div className='menu-image' >
                    <img src={image} alt="" />
                </div>
                <div className='menu-info'>
                    <h3>{name}</h3>
                    <p>{description.slice(0, 30)}...</p>
                    <h2>${price.toFixed(2)}</h2>
                </div>
            </div>
        </Link>
    );
};

export default MenuItem;