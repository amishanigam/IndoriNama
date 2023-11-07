import React from 'react'
import image from '../assest/gate-of-india 1 (1).png';
import imge from '../assest/Group 1000000870 (1).png'
import im from '../assest/Group 1000000871 (1).png'
import ig from '../assest/Group 1000000872.png'
import ilg from '../assest/Group 1000000873.png'
import ikg from '../assest/Group 1000000874.png';

function Navbar() {
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

<div class="container name col-md-4 border border-primary d-flex flex-direction-row ms-7  p-3">

<div className='col-md-1 city'>
<img src={image}className='rounded-circle'></img>
<h1 className='fw-normal fs-4'>Mumbai</h1>
</div>

<div className='col-md-2 ms-5 city  '>
<img src={im}className='rounded-circle'></img>
<h1 className='fw-normal fs-4'>Delhi</h1>
</div>
<div className='col-md-2  city'>
<img src={imge}className='rounded-circle'></img>
<h1 className='fw-normal fs-4'>Mumbai</h1>
</div>

<div className='col-md-2  city'>
<img src={ig} className='rounded-circle'></img>
<h1 className='fw-normal fs-4'>Heydrabad</h1>
</div>

<div className='col-md-2  city'>
<img src={ilg} className='rounded-circle'></img>
<h1 className='fw-normal fs-4'>Chandigarh</h1>
</div>

<div className='col-md-2  city'>
<img src={ikg} className='rounded-circle'></img>
<h1 className='fw-normal fs-4'>chennai</h1>
</div>

<div className=''>

<h1 className='fw-normal bg-dark text-white'>View all city <i class="bi bi-arrow-right-circle-fill"></i></h1>
</div>
</div>

</>
  )
}

export default Navbar