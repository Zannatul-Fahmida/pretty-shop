import React from 'react';
import './PopularProduct.css';
import StarRatings from 'react-star-ratings/build/star-ratings';
import { Button } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';

const PopularProduct = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card h-100 justify-content-center">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 popular-img">
                            <img className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="col-md-8 position-relative">
                            <div className="card-body text-start">
                                <StarRatings
                                    rating={5}
                                    starRatedColor="#ffb303"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <h5 className="card-title">Dogs Food</h5>
                                <div className="d-flex">
                                    <p className="text-decoration-line-through mb-0">$39</p>
                                    <h5 className="ms-2">$30</h5>
                                </div>
                                <p className="card-text text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                <Button id="btn-cart1" style={{ backgroundColor: '#ff0565' }} className="border-0 btn-cart">Add to cart</Button>
                            </div>
                            <div className="position-absolute top-0 end-0">
                                <div className="fs-3 pe-2 cursor">
                                    <AiOutlineHeart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col food2">
                <div className="card h-100 justify-content-center">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 popular-img2">
                            <img className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <StarRatings
                                    rating={4.5}
                                    starRatedColor="#ffb303"
                                    numberOfStars={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <h5 className="card-title">Cats Food</h5>
                                <div className="d-flex">
                                    <p className="text-decoration-line-through mb-0">$26</p>
                                    <h5 className="ms-2">$20</h5>
                                </div>
                                <p className="card-text text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                <Button style={{ backgroundColor: '#ff0565' }} className="border-0 btn-cart">Add to cart</Button>
                            </div>
                            <div className="position-absolute top-0 end-0">
                                <div className="fs-3 pe-2 cursor">
                                    <AiOutlineHeart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PopularProduct;