import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { connect } from 'react-redux';

const Header = (props) => {
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
                            <div className='cart-badge'>{props.carts.length}</div>
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

const mapStateToProps = state => {
    return {
        carts:state.cartReducer.carts,
    }
}

export default connect(mapStateToProps,null)(Header);