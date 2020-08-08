import React from 'react';

const PageNotFound = (props) => {
  return (
    <div className="text-center mt-5">
      <i className="fas fa-user-astronaut text-white fa-9x mb-4 mt-5" style={{ WebkitTextStrokeWidth: '3px', WebkitTextStrokeColor: '#182026' }}></i>
      <h1 style={{ fontWeight: 300 }}>Lost in space !</h1>
      <button className="btn btn-primary" onClick={() => props.history.goBack()}>
        <i className="fas fa-globe-asia mr-2"></i>Warp Back
      </button>
    </div>
  );
};

export default PageNotFound;
