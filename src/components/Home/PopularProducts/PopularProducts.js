import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PopularProducts.css';
import { MdOutlinePets } from 'react-icons/md';
import PopularProduct from '../PopularProduct/PopularProduct';

const PopularProducts = () => {
    return (
        <Container className="my-5">
            <Link to="/" className="text-decoration-none">
                <h2 className="popular-products">Products of The Week</h2>
            </Link>
            <div className='d-flex justify-content-center'>
            <div className="w-50">
                <h2 className="my-element decorative-line"><MdOutlinePets /></h2>
            </div>
            </div>
            <PopularProduct />
        </Container>
    );
};

export default PopularProducts;