import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <div className="align-items-center p-5">
      <div className="card">
        <h5 className="card-header">LandingPage</h5>
        <div className="card-body">
          <h5 className="card-title">Work in progress</h5>
          <p className="card-text">Please check signup/login pages</p>
          <Link className="btn btn-primary" to={`/register`}>
            Sign Up
          </Link>
          {'  '}
          <Link className="pr-2 btn btn-primary" to={`/login`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
