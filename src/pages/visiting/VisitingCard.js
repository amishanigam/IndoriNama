import React from 'react'
import img from '../../assest/Rectangle 40191.png'
import visit from '../../assest/image 165.png'
import step from '../../assest/image 82.png'

function VisitingCard() {
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
      <div className=' container-xl  border  mt-3 '>
     <div className='container-xxl p-4 mt-3 text-center'>
     <h1 className='fs-5'>Home <i class="bi bi-chevron-right "></i> visiting Card</h1>
     <h1 className='mt-5'>Visiting Card</h1>
     <div class="dropdown">
       <button class="btn btn col-md-2 float-end dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       Sort By: Price
       </button>
       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       
         <li><a class="dropdown-item" href="#">Low to High</a></li>
         <li><a class="dropdown-item" href="#">High to Low</a></li>
       </ul>
     </div>
     
     <div className='container d-flex flex-direction-row'>
     
     <div className='col-md-8 ms-5 mt-5'>
     
     
     </div>
     </div>
     
     
     </div>
     </div>
     <div className='d-flex flex-direction-row ms-5 mt-5 '>
     <img src={img}></img>
     <h1 className='text-center fs-1'>Shop By Shapes</h1>
     </div>
     
     
      
     <div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Standard</p>
      
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Classic</p>
       
       </div>
     </div>
     
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Rounded Corner</p>
       
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Square</p>
       
       </div>
     </div>
     </div>
     <div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Standard</p>
      
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Classic</p>
       
       </div>
     </div>
     
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Rounded Corner</p>
       
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Square</p>
       
       </div>
     </div>
     </div>
     <div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Standard</p>
      
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Classic</p>
       
       </div>
     </div>
     
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Rounded Corner</p>
       
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Square</p>
       
       </div>
     </div>
     </div>
     <div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Standard</p>
      
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Classic</p>
       
       </div>
     </div>
     
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Rounded Corner</p>
       
       </div>
     </div>
     <div class="card col-md-2 me-4">
       <img src={visit} class="card-img-top" alt="..."/>
       <div class="card-body">
       <p className='fs-6'>Square</p>
       
       </div>
     </div>
     </div>
     <div className='d-flex justify-content-center align-items-center mt-5'>
     <button type='button' className='btn btn-dark col-md-2 text-center rounded fs-5 fw-bolder' >
       view more<br/><i className='bi bi-arrow-right-circle-fill'></i>
     </button>
     
     </div>
     <div className='container-xxl mt-5 rounded border'>
     <div className='step'>
     
     <h1 className='text-center fs-1 mt-5'>A Step By Step Guide To Make Your Digital Plan</h1>
     <img className='ms-5 mt-5 ' src={step}></img>
     
     </div>
     </div>
        </>
       )
     }

export default VisitingCard