import React from 'react'

function Download() {
  return (
    <>
    <div className='container-fluid d-flex flex-direction-row sell bg-danger '>
    <div className='container-md ms-md-5 p-md-5'>
      <h1 className='text-white down '>Download the App</h1>
      <p className='fs-2 text-white'>
      Sell your old phone | Buy top-qulaity refurbished phones |<br/> Get your phone repaired
      </p>
      <button type='button' className='btn btn-dark mt-5 col-md-2 m-5 fs-5 fw-bolder' disabled>
        GET IT ON <br/> Google Play<i className='bi bi-arrow-right-circle-fill'></i>
      </button>
      <button type='button' className='btn btn-dark col-md-3 fs-5 fw-bolder' disabled>
      Download on the <br/> App Store
    </button>
    </div>
   
    </div>


    
    </>
  )
}

export default Download