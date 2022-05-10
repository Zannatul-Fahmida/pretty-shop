import React from 'react';
import { Blob } from 'react-blob';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineInbox } from 'react-icons/ai';
import { MdOutlinePets } from 'react-icons/md';
import { BsBoxArrowLeft, BsHeadset } from 'react-icons/bs';

const Avatar = ({ src, alt }) =>
    <Blob size="100px" src={src} alt={alt} />

const FunnyLinkButton = ({ href, ...props }) =>
    <a href={href}><Blob size="2em" {...props} /></a>

const BackgroundBlob = ({ style, props }) =>
    <Blob size="100vh"
        style={{
            position: 'absolute',
            top: '-18%',
            right: '-12%',
            zIndex: -1,
            backgroundColor: '#21D4FD',
            color: 'white',
            opacity: 0.05,
            fontSize: '50vh',
            ...style
        }}
        {...props}
    />

const Advantages = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "#ffb300" }}
                        className="text-white"
                    >
                        <div>
                            <h1><AiOutlineInbox /></h1>
                            <h5>ORDER TODAY!</h5>
                            <h5>SAVE 20%</h5>
                        </div>
                    </Blob>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "#ff2159" }}
                        className="text-white"
                    >
                        <div>
                            <h1><BsBoxArrowLeft /></h1>
                            <h5>MONEYBACK</h5>
                            <h5>GUARANTEE</h5>
                        </div>
                    </Blob>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "#00bcd9" }}
                        className="text-white"
                    >
                        <div>
                            <h1><BsHeadset /></h1>
                            <h5>24/7 CUSTOMER</h5>
                            <h5>SUPPORT</h5>
                        </div>
                    </Blob>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "#00bd2f" }}
                        className="text-white"
                    >
                        <div>
                            <h1><MdOutlinePets /></h1>
                            <h5>ALL THINGS</h5>
                            <h5>AVAILABLE HERE</h5>
                        </div>
                    </Blob>
                </Col>
            </Row>
        </Container>
    );
};

export default Advantages;