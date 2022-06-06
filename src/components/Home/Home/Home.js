import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Advantages />
            <PopularProducts />
            <Categories />
            <FeaturedProducts />
        </div>
    );
};

export default Home;