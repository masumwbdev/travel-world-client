import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, imgURL, price, location, working, description } = service;
    return (
        <div>
            <div>
                <div class="col">
                    <div class="card h-100">
                        <img className="img-fluid service-img" src={imgURL} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className="mb-2 card-icon-color">
                                <span className="me-3"><i class="fas fa-record-vinyl"></i> {working}</span>
                                <span><i class="fas fa-map-marker-alt"></i> {location}</span>
                            </div>
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description?.slice(0, 150)}</p>
                        </div>
                        <div class="card-footer">
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span className="fs-5 fw-bold price">From $ {price}</span>
                                </div>
                                <div className="book-now">
                                    <Link to={`/booking/${_id}`}><button>Book Now <i class="fas fa-cart-plus font-awesome"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

