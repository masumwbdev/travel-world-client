import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, imgURL, price, location, working, reviews, totalReviews } = service;
    return (
        <div>
            <div>
                <div class="col">
                    <div class="card h-100">
                        <img className="img-fluid" src={imgURL} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className="mb-2 card-icon-color">
                                <span className="me-3"><i class="fas fa-record-vinyl"></i> {working}</span>
                                <span><i class="fas fa-map-marker-alt"></i> {location}</span>
                            </div>
                            <h5 class="card-title">{name}</h5>
                            <div><p><i class="fas fa-star text-warning"></i> {reviews} ({totalReviews} reviews)</p></div>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span className="fs-5 fw-bold price">From $ {price}</span>
                                </div>
                                <div className="book-now">
                                    <button>Book Now <i class="fas fa-cart-plus font-awesome"></i></button>
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