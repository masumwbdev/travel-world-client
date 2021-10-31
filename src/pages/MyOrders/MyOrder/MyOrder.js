import React from 'react';

const MyOrder = ({myService}) => {
    const {name, email} = myService;
    console.log(myService)
    
    
    return (
        <div>
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    );
};

export default MyOrder;