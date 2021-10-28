import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found text-center">
            <i className="far fa-sad-cry notfound-emoji"></i>
            <h1>404</h1>
            <h5 className="mt-3">Page Not Found !!!</h5>
            <button className="btn btn-primary btn-sm mt-3"><Link to="/home">Back Home</Link></button>
        </div>
    );
};

export default NotFound;