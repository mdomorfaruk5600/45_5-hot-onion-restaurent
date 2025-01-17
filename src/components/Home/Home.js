import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import Menu from '../Menu/Menu';
import Features from '../Features/Features';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Menu />
            <Features />
        </>
    );
};

export default Home;