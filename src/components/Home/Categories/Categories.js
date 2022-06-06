import React from 'react';
import { Container } from 'react-bootstrap';
import { GiPawHeart } from 'react-icons/gi';
import Category from '../Category/Category';

const Categories = () => {
    return (
        <Container className="my-5">
            <h2>Shop By Category</h2>
            <div className='d-flex justify-content-center'>
                <div className="w-50">
                    <h2 style={{color: '#ff2159'}} className="my-element decorative-line"><GiPawHeart /></h2>
                </div>
            </div>
            <Category />
        </Container>
    );
};

export default Categories;