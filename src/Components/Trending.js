import React from 'react'
import img from '../assest/Rectangle 40191.png'


function Trending() {
  return (
   <>
   <div className='container-fluid   p-5'>
   <div className='d-flex flex-direction-row justify-content-center '>
   <img src={img}></img>
  <h1 className='text-center fs-1'>Trending offer</h1>
  </div>
   <div class="row border mt-5 d-flex flex-direction-row justify-content-center">
  <div class="col-md-2">
    <div class="card ">
      <div class="card-body bg-primary text-white rounded ">
      <a href="#" class="btn btn-secondry d-flex align-item-center justify-content-center  ms-5 text-center  border text-white col-md-3">BUY</a>
        <h5 class="card-title ms-5">Save up to Rs 250 on bus tickets</h5>
        <h6 class="card-title ms-5">Valid Till 30 Sep</h6>
       
        <a href="#" class="btn btn-secondry text-white ms-5 border">FIRST</a>
      </div>
    </div>
  </div>
  <div class="col-md-2">
  <div class="card">
    <div class="card-body bg-success text-white rounded">
    <a href="#" class="btn btn-secondry border text-white ms-5 w-4">BUY</a>
      <h5 class="card-title ms-5">Save up to Rs 250 on bus tickets</h5>
      <h6 class="card-title ms-5">Valid Till 30 Sep</h6>
     
      <a href="#" class="btn btn-secondry text-white ms-5 border">FIRST</a>
    </div>
  </div>
</div>
<div class="col-md-2">
<div class="card">
  <div class="card-body bg-danger text-white rounded">
  <a href="#" class="btn btn-secondry border text-white ms-5 w-4">BUY</a>
    <h5 class="card-title ms-5">Save up to Rs 250 on bus tickets</h5>
    <h6 class="card-title ms-5">Valid Till 30 Sep</h6>
   
    <a href="#" class="btn btn-secondry text-white ms-5 border">FIRST</a>
  </div>
</div>
</div>
<div class="col-md-2">
    <div class="card">
      <div class="card-body bg-primary text-white rounded-5 ">
      <a href="#" class="btn btn-secondry border text-white ms-5 w-4">BUY</a>
        <h5 class="card-title ms-5 ">Save up to Rs 250 on bus tickets</h5>
        <h6 class="card-title ms-5">Valid Till 30 Sep</h6>
       
        <a href="#" class="btn btn-secondry text-white ms-5 border">FIRST</a>
      </div>
    </div>
  </div>
</div>
   
   
   
   </div>
   
   </>
  )
}

export default Trending