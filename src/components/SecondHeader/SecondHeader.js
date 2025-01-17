import React from 'react';
import './SecondHeader.css';
import { Link, useLocation } from 'react-router-dom';

const SecondHeader = () => {
    return (
        <div className='menu-categories'>
            <ul style={{justifyContent:'center'}}>
                <li><Link to={'/'} state={{ want:'breakfast' }} style={{color:'black', textDecoration:'none'}}>Breakfast</Link></li>
                <li><Link to={'/'} state={{ want:'lunch' }} style={{color:'black', textDecoration:'none'}}>Lunch</Link></li>
                <li><Link to={'/'} state={{ want:'dinner' }} style={{color:'black', textDecoration:'none'}}>Dinner</Link></li>
            </ul>
        </div>
    );
};

export default SecondHeader;