import React from 'react';
import './Banner.css'
import imgOne from '../../../media/images/banner/one.jpg'
import imgTwo from '../../../media/images/banner/two.jpg'
import imgThree from '../../../media/images/banner/three.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imgTwo} class="d-block w-100" alt="..." />
                        <div class ="carousel-caption d-none d-md-block">
                        <h1>Corporate Travel</h1>
                        <p className="fs-5 mb-3 mt-3">Want to see how simple corporate travel can be? </p>
                        <button className="fs-5 mb-5 btn btn-warning fw-bold">Let us Show You <i class="fas fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgOne} class="d-block w-100" alt="..." />
                        <div class ="carousel-caption d-none d-md-block">
                        <h1>Meetings and Events</h1>
                        <p className="fs-5 mb-3 mt-3">Unforgettable events to engage and inspire!</p>
                        <button className="mb-5 fs-5 btn btn-warning fw-bold">Let's get planning <i class="fas fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgThree} class="d-block w-100" alt="..." />
                        <div class ="carousel-caption d-none d-md-block">
                        <h1>Vacation Travel</h1>
                        <p className="fs-5 mb-3 mt-3">Inspiring destinations within your reach!</p>
                        <button className="fs-5 mb-5 btn btn-warning fw-bold">Let's Go <i class="fas fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;