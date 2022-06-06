import React from 'react';
import { Container } from 'react-bootstrap';
import { GiPawHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const FeaturedProducts = () => {
    return (
        <Container className="my-5">          
            <Link to="/" className="text-decoration-none">
                <h2 className="popular-products">Featured Products</h2>
            </Link>
            <div className='d-flex justify-content-center'>
                <div className="w-50">
                    <h2 style={{color: '#ff2159'}} className="my-element decorative-line"><GiPawHeart /></h2>
                </div>
            </div>
            <FeaturedProduct />
        </Container>
    );
};

export default FeaturedProducts;