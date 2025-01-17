import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='banner'>
            <div className='title'>
                <h1>Best food waiting for your belly</h1>
            </div>
            <div className='search-box'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search food items" />
                    <div className="input-group-append">
                        <span className="input-group-text">Search</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;