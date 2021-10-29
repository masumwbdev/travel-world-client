import React from 'react';

const Client = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 container mx-auto border-0 g-4 pt-4 text-center">
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body">
                            <h1>780</h1>
                            <p className="fs-5">Unique Clients</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body">
                            <h1>98%</h1>
                            <p className="fs-5">Client Retention</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body">
                            <h1>22</h1>
                            <p className="fs-5">Years of Organic Growth</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body">
                            <h1>100%</h1>
                            <p className="fs-5">Employee Owned</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
