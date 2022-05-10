import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Advantages />
            <PopularProducts />
        </div>
    );
};

export default Home;