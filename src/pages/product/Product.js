import React from 'react'
import gift from '../../assest/image 134.png'
import img from '../../assest/Rectangle 40191.png'

function Product() {
  return (
    <>
    <nav class="navbar">
  <div class="container bg-light p-2">
    <a class="navbar-brand text-dark fw-bolder fs-2 col-md-3">INDORINAMA</a>
    <form class="d-flex form col-md-8">
    <div class="input-group">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input class="form-control text-dark me-5 rounded-10" type="search" placeholder="Search " aria-label="Search"/>
    </div>
     
      
      <a class="navbar-brand text-dark fs-3">INR(Rs)</a>
     
      <i class="bi bi-cart-check-fill"></i>

      <button class="btn btn-outline-dark text-white bg-dark col-md-2 " type="text">Login</button>
      

    </form>
  </div>
</nav>
<div className=' container rounded  border  mt-3 '>
<div className='container-xxl p-4 mt-3 text-center'>
<h1 className='fs-5'>Home <i class="bi bi-chevron-right "></i> Festival <i class="bi bi-chevron-right "></i>Blissful Celebration Diwali Hamper  </h1>



<div className='container d-flex flex-direction-row'>

<div className='col-md-8 ms-5 mt-5 '>


</div>
</div>


</div>
</div>
<div className='container-fluid row '>
<div className='col-md-1 ms-2 mt-5 '>
<img className='col-md-10 ms-5' src={gift}></img>
<img className='col-md-10 mt-3 ms-5' src={gift}></img>
<img className='col-md-10 mt-3 ms-5' src={gift}></img>
<img className='col-md-10 mt-3 ms-5' src={gift}></img>
<img className='col-md-10 mt-3 ms-5' src={gift}></img>

</div>
<div className='col-md-5 sweet mt-5 ms-5'>
<img className='col-md-12 ms-5 ' src={gift}></img>


</div>

<div className='col-md-5 border  ms-5 mt-5 disc'>
<h1 className='mt-3 fs-2'>Blissful Celebration Diwali Hamper</h1>
<h2 className='text-danger'>Rs 1580</h2>


<div class="btn-group rounded" role="group" aria-label="Basic example">
  <button type="button" class="btn btn border"><i class="bi bi-dash"></i></button>
  <button type="button" class="btn btn border">1</button>
  <button type="button" class="btn btn border"><i class="bi bi-plus"></i></button>
</div>
<div className=' col-12 mt-3'>
<div class="btn-group col-md-3 me-5 ">
  <button type="button" class="btn btn border">India</button>
  <button type="button" class="btn btn border dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu  ">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
   
    
  </ul>
  

</div>

<button type="button" class="btn btn border col-md-7 border rounded">451010 Avilable</button>

</div>
<div className='row'>
<h1 className='fs-5 mt-5 col-md-6'>Select Delivery Type</h1>
<h1 className='fs-5 mt-5  col-md-6' >Select Date</h1>
</div>
<div class="btn-group me-3">
  <button class="btn btn btn-lg border" type="button">
  Standard Delivery Free
  </button>
  <button type="button" class="btn btn-lg btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn btn-lg dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Select Date
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div className='row mt-3'>
<h1 className='fs-4   col-md-3 '>Description</h1>
<p className='fs-4  col-md-4 ms-4'>Product Info</p>
<p className='fs-4  col-md-4'>Product Info</p>
</div>
<div>
<p>Start the Diwali season with a burst of flavour and warmth. Packed <br/> in a beautiful gift box, this hamper includes assorted sweets, black <br/> pepper cashews, kesar almonds, mix fruit raisin dragees, blueberry <br/> plums, and a greeting card. Indulge in the sweet and tangy magic  <br/> of assorted sweets, blueberry plums, and dragees while savouring  <br/> the irresistible crunch of black pepper cashews and kesar almonds  <br/>, creating a savoury sensation. Personalize the card and box with  <br/> your brand logo and gift this hamper to your vendors, clients, and  <br/> employees, wishing them a prosperous Diwali.</p>
</div>

</div>






</div>
<div className='d-flex justify-content-center align-items-center mt-5 ms-5'>
<button type="button" class="btn btn-dark col-md-2 float-center">Get A Quotation</button>
</div>
<div className='d-flex flex-direction-row justify-content-center '>
<img src={img}></img>
<h1 className='text-center fs-1'>Recommended For You</h1>
</div>
<div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
<div class="card col-md-2 me-4">
  <img src={gift} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='fs-6'>Blissful Celebration Diwali Hamper</p>
 
  </div>
</div>
<div class="card col-md-2 me-4">
  <img src={gift} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='fs-6'>Blissful Celebration Diwali Hamper</p>
  
  </div>
</div>

<div class="card col-md-2 me-4">
  <img src={gift} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='fs-6'>Blissful Celebration Diwali Hamper</p>
  
  </div>
</div>
<div class="card col-md-2 me-4">
  <img src={gift} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='fs-6'>Blissful Celebration Diwali Hamper</p>
  
  </div>
</div>
</div>
    </>
  )
}


export default Product