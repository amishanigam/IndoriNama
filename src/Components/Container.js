import React from 'react';
import img from '../assest/image 14.png';

function Container() {
  return (
    <div className='container-xl d-flex flex-direction-row sell bg-danger'>
      <div className='container-md ms-md-5 p-md-5'>
        <h1 className='text-white'>Sell Old Phone</h1>
        <p className='fs-2 text-white'>
          From Your Doorstep or at any of our 200 stores Pan India
        </p>
        <button type='button' className='btn btn-light col-md-4 fs-5 fw-bolder' disabled>
          Sell Now <i className='bi bi-arrow-right-circle-fill'></i>
        </button>
      </div>
      <div className='container-md float-end ms-md-5'>
        <img src={img} alt='Your Image' className='img-fluid' />
      </div>
    </div>

    
  );
}

export default Container;
