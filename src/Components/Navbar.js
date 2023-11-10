import React, { useState } from 'react';
import image from '../assest/gate-of-india 1 (1).png';
import imge from '../assest/Group 1000000870 (1).png'
import im from '../assest/Group 1000000871 (1).png'
import ig from '../assest/Group 1000000872.png'
import ilg from '../assest/Group 1000000873.png'
import ikg from '../assest/Group 1000000874.png';
import Modal from 'react-modal';


function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


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

      

    </form>
  </div>
</nav>

<div class="container name border-primary d-flex flex-direction-row ms-7  p-3">

<div className='col-md-1 city'>
<img src={image}className='rounded-circle'></img>
<h1 className='fw-normal fs-5'>Mumbai</h1>
</div>

<div className='col-md-1 city  '>
<img src={im}className='rounded-circle'></img>
<h1 className='fw-normal fs-5'>Delhi-Ncr</h1>
</div>
<div className='col-md-1  city'>
<img src={imge}className='rounded-circle'></img>
<h1 className='fw-normal fs-5'>Bengaluru</h1>
</div>

<div className='col-md-1  city'>
<img src={ig} className='rounded-circle'></img>
<h1 className='fw-normal fs-5'>Heydrabad</h1>
</div>

<div className='col-md-1  city'>
<img src={ilg} className='rounded-circle'></img>
<h1 className='fw-normal fs-5'>Chandigarh</h1>
</div>

<div className='col-md-1   city'>
<img src={ikg} className='rounded-circle'></img>
<h1 className='fw-normal fs-5'>chennai</h1>
</div>

<div className='col-md-1'>

<h1 className='bg-dark text-white col-md-12 fs-3 me-5'>View all city <i class="bi bi-arrow-right-circle-fill"></i></h1>
</div>
</div>

</>
  )
}

export default Navbar