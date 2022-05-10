import React from 'react';
import dogfood1 from '../../../images/dog food single.png';
import catfood1 from '../../../images/cat food.png';
import './PopularProduct.css';

const PopularProduct = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={dogfood1} className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">Dogs Food</h5>
                                <div className="d-flex">
                                    <p className="text-decoration-line-through mb-0">$39</p>
                                    <h5 className="ms-2">$30</h5>
                                </div>
                                <p className="card-text text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col food2">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={catfood1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">Cats Food</h5>
                                <div className="d-flex">
                                    <p className="text-decoration-line-through mb-0">$26</p>
                                    <h5 className="ms-2">$20</h5>
                                </div>
                                <p className="card-text text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;