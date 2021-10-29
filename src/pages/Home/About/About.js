import React from 'react';
import prize from '../../../media/images/about/prize.png'
import './About.css'

const About = () => {
    return (
        <div className="text-center px-5 about-container">
            <h1>WE MAKE TRAVEL SIMPLE!</h1>
            <p>World Travel, Inc. is a global mid-market leader in corporate travel management. As the largest organically grown travel management company in the United States, we’ve grown steadily and sustainably since 1983. We are 100% employee-owned, as well as entirely focused on providing our clients with superior service, state-of-the-art technology, consulting services, and customization to meet their business needs.  </p>
            <img className="img-fluid" src={prize} alt="" />
        </div>
    );
};

export default About;