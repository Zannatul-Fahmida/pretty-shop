import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <Container className="d-flex flex-column align-items-start h-100 justify-content-center text-white">
                <h6 className="mb-4">Bio-Organic 40% OFF</h6>
                <h1 className="fw-bold">We Care About</h1>
                <h1 className="fw-bold">Your Pet!</h1>
            </Container>
        </div>
    );
};

export default Banner;