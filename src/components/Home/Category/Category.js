import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Blob } from 'react-blob';
import cat from '../../../images/IMG_20200821_185755.png';
import dog from '../../../images/dog_230497594.png';
import bird from '../../../images/IMG_20191021_163345.png';
import rabbit from '../../../images/brown-bunny.png';
import './Category.css';

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

const Category = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "rgb(199, 198, 198)" }}
                        className="text-white"
                    >
                        <div className="category-circle">
                            <img src={cat} style={{width: '150px'}} alt="cat" />
                            <h4 className="text-black">All for cats</h4>
                        </div>
                    </Blob>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "rgb(199, 198, 198)" }}
                        className="text-white"
                    >
                        <div className="category-circle">
                            <img src={dog} style={{width: '100px'}} alt="dog" />
                            <h4 className="text-black">All for dogs</h4>
                        </div>
                    </Blob>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "rgb(199, 198, 198)" }}
                        className="text-white"
                    >
                        <div className="category-circle">
                            <img src={bird} style={{width: '120px'}} alt="bird" />
                            <h4 className="text-black">All for birds</h4>
                        </div>
                    </Blob>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Blob
                        size="15em"
                        style={{ backgroundColor: "rgb(199, 198, 198)" }}
                        className="text-white"
                    >
                        <div className="category-circle">
                            <img src={rabbit} style={{width: '130px'}} alt="rabbit" />
                            <h4 className="text-black">All for rabbits</h4>
                        </div>
                    </Blob>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;