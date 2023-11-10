import React from 'react'
import img from '../assest/Rectangle 40191.png'
import image from '../assest/image 103.png'
import indori from '../assest/Indorinama-Page 2.png'
import ind from '../assest/Indorinama-Page 2 (1).png'
import indo from '../assest/Indorinama-Page 2 (2).png'
import indor from '../assest/Indorinama-Page 2 (3).png'
import inr from '../assest/Indorinama-Page 2 (4).png'



function Venture() {
  return (
   <>
   <div className='container-fluid mt-5 border me-5                                                                                            d mt-2'>
   <div className=' justify-content-center'>
       <img src={img}></img>
       <h1 className='textcenter mt-5 fs-1'>Our Venture</h1>

       <div  className='container border col-md-6  d-flex align-item-center justify-content-center'>
       <div className='col-md-1  p-5'>
       <img src={image}className='image-fluid'></img>
       
       </div>
       <div className='col-md-1   ms-2 p-5'>
       <img src={indori}className=''></img>
    
       </div>
       
       <div className='col-md-1   ms-2 p-5'>
       <img src={ind} className=''></img>
     
       </div>
       
       <div className='col-md-1   ms-2 p-5'>
       <img src={indo} className=''></img>
      
       </div>
       
       <div className='col-md-1   ms-1 p-5'>
       <img src={indor} className=''></img>
      
       </div>
       <div className='col-md-1   ms-1 p-5'>
       <img src={inr} className=''></img>
      
       </div>
       
       
     
       </div>
   </div>
  

</div>
   </>
  )
}

export default Venture