import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="p-4 my-2">
                <div className="row">
                    <div className="col-12 mb-2">
                        <div className="card">
                            <div className="card-body card-padding py-4 border-left border-secondary border-width-4">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2 col-xl-1">
                                        {/* <img src={require('')} title="User" alt="User" /> */}
                                    </div>
                                    <div className="col-md-9 col-lg-6 col-xl-6 pl-xl-5 mt-3 mt-lg-0">
                                        <h4 className="text-primary">New Deployment</h4>
                                        <p className="h6 font-weight-normal line-height-26">
                                            The IMS supports multitenancy for your Deployments by providing separate Services dor multiple OTT/IPTV service organisations.
                  </p>
                                    </div>
                                    <div className="col-md-12 col-lg-4 col-xl-5 d-flex justify-content-lg-end justify-content-center align-items-center mt-3 mt-lg-0">
                                        <Link className="btn btn-secondary rounded-pill btn-default" to={``}>
                                            Create New Deployment
                  </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard;