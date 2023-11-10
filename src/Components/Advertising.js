import React from 'react'
import profile from '../assest/user-check-rounded-svgrepo-com 4.png'
import  team from '../assest/team-3-svgrepo-com 4.png'
import you from '../assest/media-svgrepo-com 4.png'
import member from '../assest/team-member-svgrepo-com 4.png'
import market from '../assest/marketing-mail-svgrepo-com 4.png'
import chart from '../assest/chart-bar-vertical-svgrepo-com 4.png'

function Advertising() {
  return (
    <>
    <div className='container-xl text-center sell bg-light'>
      <div className='container-md ms-md-5 p-md-5'>
        <h1 className='text-dark fs-2 fw-bolder'>Your Perfect Advertising Partner</h1>
        <p className='fs-5 fw-medium text-dark'>
        Excellent Publicity is forever expanding your brand with high quality service that combines creativity with value pricing. We enjoy our work because, first - we admire the advertising world, and second, we know that our ideas and strategies make a difference. We play to win, with the primary goal of assisting our customers in promoting their successful brand campaigns.
        </p>
        <div  className='container-xl d-flex flex-direction-row me-5  p-3'>
        <div className='col-md-2 border  p-5'>
        <img src={profile}className='rounded-circle'></img>
        <h1 className='fw-normal fs-3'>Happy Clients</h1>
        </div>
        <div className='col-md-2 border  p-5 '>
        <img src={team}className='rounded-circle'></img>
        <h1 className='fw-normal fs-3'>Qualified Team <br/> Members</h1>
        </div>
        
        <div className='col-md-2 border p-5  '>
        <img src={you} className='rounded-circle'></img>
        <h1 className='fw-normal fs-3'>Media Options</h1>
        </div>
        
        <div className='col-md-2 border  ms-2 p-5  '>
        <img src={member} className='rounded-circle'></img>
        <h1 className='fw-normal fs-3'>Vendor tie-ups</h1>
        </div>
        
        <div className='col-md-2 border  ms-2 p-5  '>
        <img src={market} className='rounded-circle'></img>
        <h1 className='fw-normal fs-3'>Compaigns</h1>
        </div>
        <div className='col-md-2 border  ms-2 p-5 '>
        <img src={chart} className='rounded-circle'></img>
        <h1 className='fw-normal fs-3'>Varticals</h1>
        </div>
        
        
      
        </div>


        <div className='d-flex justify-content-center align-items-center'>
        <button type='button' className='btn btn-dark col-md-2 text-center fs-5 fw-bolder' >
          About Us <br/> <i className='bi bi-arrow-right-circle-fill'></i>
        </button>
        
      </div>
      </div>
      <div className='container-md float-end ms-md-5'>
       
      </div>
    </div>
    </>
  )
}

export default Advertising