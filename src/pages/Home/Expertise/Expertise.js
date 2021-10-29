import React from 'react';
import './Expertise.css'

const Expertise = () => {
    return (
        <div>
            <div className="expertise">
                <div className="text-center px-5">
                    <h1>OUR EXPERTISE</h1>
                    <p>We are dedicated to helping our clients improve their travel program by making it easier to manage, and easier for travelers to travel. Since 1983, our company has been growing and hiring travel experts who are passionate about our industry. We take pride in finding the best solutions for our valued clients.</p>
                </div>
                <div>
                <div class="row row-cols-1 row-cols-md-3 container mx-auto border-0 g-4 pt-4 text-center card-item">
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body card-expert shadow rounded">
                            <div><i class="fs-1 fas fa-mobile-alt"></i></div>
                            <h1>Solutions</h1>
                            <p className="fs-5">At World Travel, Inc., we value innovation. It leads to creative solutions and new technologies that improve your experience.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body card-expert shadow rounded">
                            <div><i class="fab fa-servicestack fs-1"></i></div>
                            <h1>Education</h1>
                            <p className="fs-5">Travel is a service industry, and we have over 37 years of experience. Trust our people to find the answers you need.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body card-expert shadow rounded">
                            <div>
                            <i class="fs-1 fas fa-user-graduate"></i>
                            </div>
                            <h1>Education</h1>
                            <p className="fs-5">Join our subject matter experts at one of the many industry events we host to help you stay informed about what’s going on in the travel industry.</p>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;