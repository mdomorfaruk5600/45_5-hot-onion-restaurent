import React, { useContext } from 'react';
import './OrderPlaced.css';
import map from '../../images/map.webp';
import deliveryImage from '../../images/Group 1151.png';
import userImage from '../../images/Group 1152.png';
import { UserContext } from './../../Helper/UserProvider/UserProvider';
import { ShipmentContext } from './../../Helper/ShipmentProvider/ShipmentProvider';


const OrderPlaced = () => {
    const [user] = useContext(UserContext);
    const [data] = useContext(ShipmentContext);
    return (
        <div className='container' style={{alignItems:'start', marginBottom:'5rem'}}>
            <div className='left-sidebar'>
                <img src={map} alt="" />
            </div>
            <div className='right-sidebar'>
                <div className='right-content'>
                    <img src={deliveryImage} alt='' />
                    <div className='location-box'>
                        <div className='line'>
                            <span className='top'></span>
                            <hr/>
                            <span className='bottom'></span>
                        </div>
                        <div style={{marginLeft: '6px'}}> 
                           <div className='your-location'>
                                <span className='title'>Your Location</span>
                                <span className='sub-title'> {data.road} </span>
                            </div> 
                           <div className='shop-location'>
                                <span className='title'>Shop Location</span>
                                <span className='sub-title'>Gulshan Plaza Restaura GPR</span>
                           </div>
                        </div>
                    </div>
                    <div className='time-line'>
                        <h2>09:30</h2>
                        <span className='sub-title'>Estimated delivery time</span>
                    </div>
                    <div className='user-card'>
                        <div className='user-image'>
                            <img src={userImage} alt="" />
                        </div>
                        <div className='user-info'>
                            <h3>{user.name}</h3>
                            <span>Your raider</span>
                        </div>
                    </div>
                        <button className='contact-btn'>Contact</button>
                </div>
            </div>
        </div>
    );
}


export default OrderPlaced;