import React from 'react'
import img from '../../assest/image 14.png';
import hotstar from '../../assest/image 47.png'
import sony from '../../assest/image 52.png'
import voot from '../../assest/image 53.png'
import mxp from '../../assest/image 54.png'
import step from '../../assest/image 82.png'
import  side from '../../assest/image 83.png'

function MainContainer() {
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

<div className='container-xl d-flex flex-direction-row sell bg-danger'>
      <div className='container-md ms-md-5 p-md-5'>
        <h1 className='text-white'>Sell Old Phone</h1>
        <p className='fs-2 text-white'>
          From Your Doorstep or at any of our 200 stores Pan India
        </p>
        <button type='button' className='btn btn-light col-md-4 fs-5 fw-bolder' disabled>
          Sell Now <i className='bi bi-arrow-right-circle-fill'></i>
        </button>
      </div>
      <div className='container-md float-end ms-md-5'>
        <img src={img} alt='Your Image' className='img-fluid' />
      </div>
    </div>
    <div className=' container-xxl  border  mt-3 '>
   
    <div className='container-xxl  border p-4 mt-3 '>
    <h1 className='fs-5'>Home <i class="bi bi-chevron-right "></i> Digital</h1>
    <h1 className='fs-5 p-1'>Digital</h1>

    
    </div>
    <div class=" container-sm  btn-group p-5 ">
    <button type="button" class="btn btn border dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
<button type="button" class="btn btn border dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Language
</button>

<button type="button" class="btn btn border dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Pricing Model
</button>
<button type="button" class="btn btn-dark  dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Case Studies
</button>
<button type="button" class="btn btn-dark  dropdown-toggle m-2 col-md-2 " data-bs-toggle="dropdown" aria-expanded="false">
Price Range 
</button>

<button type="button" class="btn btn border  dropdown-toggle m-2 col-md-2 " data-bs-toggle="dropdown" aria-expanded="false">
Sort By: Popularity
</button>


</div>
</div>
 


<div className='container-xxl d-flex flex-direction-row mt-5'>
<div class="card col-md-3 me-2">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Hotstar, App</h5>
  <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={sony} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Sony Live, App</h5>
  <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={voot} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">Voot, App</h5>
    <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 ">
  <img src={mxp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">MX Player, App</h5>
    <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
</div>
<div className='container-xxl d-flex flex-direction-row mt-5'>
<div class="card col-md-3 me-2">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Hotstar, App</h5>
  <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={sony} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Sony Live, App</h5>
  <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={voot} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">Voot, App</h5>
    <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 ">
  <img src={mxp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">MX Player, App</h5>
    <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
</div>
<div className='container-xxl d-flex flex-direction-row mt-5'>
<div class="card col-md-3 me-2">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Hotstar, App</h5>
  <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={sony} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Sony Live, App</h5>
  <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={voot} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">Voot, App</h5>
    <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 ">
  <img src={mxp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">MX Player, App</h5>
    <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
</div>
<div className='container-xxl d-flex flex-direction-row mt-5'>
<div class="card col-md-3 me-2">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Hotstar, App</h5>
  <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={sony} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3">Sony Live, App</h5>
  <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
  <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-2">
  <img src={voot} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">Voot, App</h5>
    <p class="card-text fs-5"> Category: Entertainment <br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 ">
  <img src={mxp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title fw-bolder fs-3">MX Player, App</h5>
    <p class="card-text fs-5">Category: Entertainment<br/> Language: English</p>
    <a href="#" class="btn btn-dark text-white col-md-12">Login to View Price</a>
  </div>
</div>

</div>
<div className='d-flex justify-content-center align-items-center mt-5'>
<button type='button' className='btn btn-dark col-md-2 text-center rounded fs-3 fw-bolder' disabled>
  view more<br/> <i className='bi bi-arrow-right-circle-fill'></i>
</button>

</div>
  

<div className='container-xxl mt-5 rounded bg-warning '>
<div className=' step '>

<h1 className='text-center fs-1 mt-5'>A Step By Step Guide To Make Your Digital Plan</h1>
<img className='ms-5 mt-5' src={step}></img>

</div>
</div>
 <div className='container-fluid mt-5 d-flex flex-direction-row bg-light border'>
 <div className='col-md-8 ms-5 mt-5 bg-light'>
  <h1>What is digital marketing?</h1>
  <p>Digital advertisement is a type of marketing where the brand uses digital channels to promote its products and services. It is the best way to reach the target audience through social media channels, where brands can leverage it to increase brand awareness, recall, and recognition, thus driving high sales and conversions.</p>
  <h1 className='mt-5'>Which are the types of advertising on digital platforms?</h1>
   <p className='mt-4'>Digital platforms are a great way to boost a brand’s awareness and visibility,<br/> thus increasing engagement and leads. The following are the types of digital <br/> advertising</p>
   <h1 className='mt-3'>Banner ads</h1>
   <p className='mt-4'>This type of digital advertisement contains images or texts and is clickable with call-to-action buttons.</p>
   <h1 className='mt-4'>Video ads</h1>
   <p className='mt-4'>These are short video advertisements mostly placed in-app or on OTT platforms.</p>
   <h1 className='mt-4'>Influencer</h1>
   <p className='mt-4'>Brand associations and endorsements with high following influencers or celebrities provide high value to the brands.</p>
   <p className='mt-4'>Achieve your business goals with Excellent Publicity’s creative and compelling digital marketing services! Let’s connect!</p>
    <h1 className='mt-5'>What are the benefits of advertising online or digitally?</h1>
    <p className='mt-4'>The following are the benefits of digital online advertising:</p>
    <h1 className='mt-5'>Reach and engagement</h1>
    <p className='mt-4'>Digital marketing campaign provides extensive reach and engagement using various social media and offline tools.</p>
     <h1 className='mt-5'>Precise targeting</h1>
     <p className='mt-5'>This type of online web advertising can be done by targeting specific demographics, interests, and market reach.</p>
     <h1 className='mt-5'>Cost-effective</h1>
     <p className='mt-4'>Online advertising costs can start from as low as 100 INR and thus it is the most affordable type of marketing for the brands</p>
     <h1 className='mt-5'>Measurable ROI</h1>
     <p className='mt-5'>It is easy to track the performance of the campaign and thus compare the results and the ROI</p>
      <p className='mt-4'>Looking to transform your digital presence and drive awareness and sales? Get hold of Excellent Publicity’s cutting-edge digital marketing solutions and take your business to the next level! Contact us now.</p> 
     <h1 className='mt-5'>How much is the cost of digital advertising?</h1>
     <p className='mt-4'>Online advertising costs depend on various factors, such as the platforms used for the campaign, the type of advertisement, and the pricing structure like CPC and CPM.</p>
     <h2 className='mt-5'>The digital advertising pricing structures are based on the following two models:</h2>
     <p className='mt-4'>CPM - It is the cost of 1000 impressions per ad.</p>
     <p className='mt-5'>CPC - This refers that the advertisers only having to pay when someone clicks on their ad.</p>
     <p className='mt-4'>For more information regarding digital ad pricing, contact Excellent Publicity for rates, deals, and packages, and get started!</p>
     <h1 className='mt-5'>Where can the digital ads be placed?</h1>
     <p className='mt-4'>Online advertising can take place on any platform that is connected to the internet. There are many ways to do digital online advertising, and it depends on what you want to advertise and your target audience. Here's a list of the top and best online advertisement sites:</p>
     <h2 className='mt-5 fs-5'>Get in touch with Excellent Publicity to get more information on digital ads marketing and which digital platforms will suit your brand’s campaign goals and objectives. Get in touch with the excellent team!</h2>
     <h1 className='mt-5'>How can you place digital ads with excellent publicity?</h1>
     <p className='mt-4'>Excellent Publicity is the best site for digital online advertising. From understanding the brand requirements to choosing the right platform, choosing from 3,000+ media options, and selecting the right pricing structure, excellent publicity is one of the best digital advertising platforms in India.</p>
     <p className='mt-4'>If you are looking for a digital marketing agency in India, then your search is over. Head on over to excellent publicity and avail yourself of the best packages and digital advertising rates to take your brand to new heights of success and reach.</p>
     <h1 className='mt-5'>For more information, contact us via phone or email.</h1>  

   </div>

 <div className='container mt-5 col-md-4 me-5  '>
<img src={side}></img>
 </div>
 </div>


 <div className='container-xxl  text-center bg-light'>
 <h1 className='mt-5'>CASE STUDIES</h1>
 <p className='mt-5'>Check out our Digital Media Case Studies to see how we've scored big for our clients!</p>

 <button type="button" class="btn btn-white btn-lg mt-5 me-5 border">GOOGLE</button>
  <button type="button" class="btn btn-white btn-lg mt-5 me-5   border">GOOGLE</button>
  <button type="button" class="btn btn-white btn-lg mt-5 me-5 border">GOOGLE</button>



 
 </div>

 <div className='container-xl d-flex text-center mt-5 sell bg-danger'>
 <div className='container-md ms-md-5 p-md-5'>
   <h1 className='text-white'>Reach out to our Media Expert for more details about <br/> Digital Advertising</h1>
  
   <button type='button' className='btn btn-light col-md-4 fs-5 fw-bolder mt-5' disabled>
     Contact us<i className='bi bi-arrow-right-circle-fill'></i>
   </button>
 </div>
</div>
 
   </>
   
  )
  
}


export default MainContainer