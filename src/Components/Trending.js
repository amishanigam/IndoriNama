import React from 'react'
import img from '../assest/Rectangle 40191.png'


function Trending() {
  return (
   <>
   <div className='container-xl  p-5'>
   <div className='d-flex flex-direction-row justify-content-center '>
   <img src={img}></img>
  <h1 className='text-center fs-1'>Trending offer</h1>
  </div>
   <div class="row mt-5">
  <div class="col-md-3">
    <div class="card ">
      <div class="card-body bg-primary text-white rounded ">
      <a href="#" class="btn btn-secondry border text-white w-4">BUY</a>
        <h5 class="card-title">Save up to Rs 250 on bus tickets</h5>
        <h6 class="card-title">Valid Till 30 Sep</h6>
       
        <a href="#" class="btn btn-secondry text-white">FIRST</a>
      </div>
    </div>
  </div>
  <div class="col-md-3">
  <div class="card">
    <div class="card-body bg-success text-white rounded">
    <a href="#" class="btn btn-secondry border text-white w-4">BUY</a>
      <h5 class="card-title">Save up to Rs 250 on bus tickets</h5>
      <h6 class="card-title">Valid Till 30 Sep</h6>
     
      <a href="#" class="btn btn-secondry text-white">FIRST</a>
    </div>
  </div>
</div>
<div class="col-md-3">
<div class="card">
  <div class="card-body bg-danger text-white rounded">
  <a href="#" class="btn btn-secondry border text-white w-4">BUY</a>
    <h5 class="card-title">Save up to Rs 250 on bus tickets</h5>
    <h6 class="card-title">Valid Till 30 Sep</h6>
   
    <a href="#" class="btn btn-secondry text-white">FIRST</a>
  </div>
</div>
</div>
<div class="col-md-3">
    <div class="card">
      <div class="card-body bg-primary text-white rounded-5 ">
      <a href="#" class="btn btn-secondry border text-white w-4">BUY</a>
        <h5 class="card-title">Save up to Rs 250 on bus tickets</h5>
        <h6 class="card-title">Valid Till 30 Sep</h6>
       
        <a href="#" class="btn btn-secondry text-white">FIRST</a>
      </div>
    </div>
  </div>
</div>
   
   
   
   </div>
   
   </>
  )
}

export default Trending