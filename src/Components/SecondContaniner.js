import React from 'react'
import radio from '../assest/radio-minimalistic-svgrepo-com 1.png'
import cinema from '../assest/cinema-clapboard-svgrepo-com 1.png'
import digital from '../assest/digital-content-content-read-look-at-pictures-svgrepo-com 1.png'
import influence from '../assest/influence 1 (1).png'
import flight from '../assest/flight-plane-svgrepo-com 1.png'
import  car from '../assest/car-svgrepo-com 1.png'
import news from '../assest/news-paper-svgrepo-com 1.png'
import bill from '../assest/billboard 1.png'
import tell from '../assest/television-technology-entertainment-svgrepo-com 1.png'
import wheel from '../assest/wheel-svgrepo-com 1 (1).png'  
import mag from '../assest/magazine-svgrepo-com 1.png'
function SecondContaniner() {
  return (
    <>
    <div className='container-fluid col border  p-3'>

    <div  className='container-xl d-flex flex-direction-row   p-3'>
    <div className='col-md-2 border p-5 m-2 city city'>
    <img src={radio}className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Radio</h1>
    </div>
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={cinema}className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Cinema</h1>
    </div>
    
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={digital} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Digital</h1>
    </div>
    
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={influence} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Influencer</h1>
    </div>
    
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={flight} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Airport</h1>
    </div>
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={tell} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Television</h1>
    </div>
    
    
  
    </div>
    <div  className='container-xl d-flex flex-direction-row p-3'>
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={car}className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>BTL</h1>
    </div>
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={news}className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>News paper</h1>
    </div>
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={bill} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Outdoor</h1>
    </div>
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={wheel} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Transit</h1>
    </div>
    
    <div className='col-md-2 border  ms-2 p-5 m-2 city city'>
    <img src={mag} className='rounded-circle'></img>
    <h1 className='fw-normal fs-3'>Magzine</h1>
    </div>
    <div className='col-md-2 border bg-dark text-white ms-2 p-3 m-2 city city'>
    
    <h1 className='fw-normal fs-3'>view more </h1>
    <i class="bi fs-1 bi-arrow-right-circle-fill"></i>
    </div>
    
    
  
    </div>
    </div>

    <div></div>
     
   

    
    

    
    </>
  )
}

export default SecondContaniner