import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { CartContext } from '../../Helper/CartProvider/CartProvider';

const Header = () => {
    const [carts] = useContext(CartContext);
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-left'>
                    <img src={logo} alt="" width={'130px'} />
                </div>
                <div className='header-right'>
                    <ul>
                        <li style={{position:'relative'}}>
                            <ShoppingCartOutlined />
                            <div className='cart-badge'>{carts.length}</div>
                        </li>
                        <li>
                            <button className='login'>Login</button>
                        </li>
                        <li>
                            <button className='signup'>Sign up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};



export default Header;