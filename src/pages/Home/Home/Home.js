import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Client></Client>
            <Services></Services>
        </div>
    );
};

export default Home;