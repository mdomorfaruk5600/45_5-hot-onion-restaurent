import React from 'react';
import './Features.css';
import leftImage from '../../images/left.png';
import centerImage from '../../images/center.png';
import rightImage from '../../images/right.png';

const Features = () => {
    return (
        <div className='features'>
            <div className='container' style={{flexDirection:'column', alignItems:'start'}}>
                <div className='features-top'>
                    <h2>Why you choose us</h2>
                    <p>Barton waited twenty always repair in within we do. An delighted offending <br/>
                    curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <div className='features-bottom'>
                    <div className='features-left features-item'>
                        <div className='left-image features-image'>
                            <img src={leftImage} alt="" width='100%' />
                        </div>
                    </div>
                    <div className='features-center features-item'>
                        <div className='center-image features-image'>
                            <img src={centerImage} alt="" width='100%' />
                        </div>
                    </div>
                    <div className='features-right features-item'>
                        <div className='right-image features-image'>
                            <img src={rightImage} alt="" width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;