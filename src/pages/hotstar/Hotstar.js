import React from 'react'
import hotstar from '../../assest/image 47.png'
import img from '../../assest/Rectangle 40191.png'
import { useNavigate } from 'react-router-dom'

function Hotstar() {
 
  const navigate = useNavigate()



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
<div className='container-xxl p-4 mt-3 '>
<h1 className='fs-5'>Home <i class="bi bi-chevron-right "></i> Digital  <i class="bi bi-chevron-right "></i>Hotstar app </h1>

<div className='container d-flex flex-direction-row'>
<img className='mt-5' src={hotstar}></img>
<div className='col-md-8 ms-5 mt-5'>
<h1>Advertising in HotStar, App</h1>
<p>Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited. Hotstar currently offers over 100,000 hours of TV content, it has huge market covering over 150 Million users. Brands can place digital advertisements like banner ads and roadblock, which is quite effective.</p>

</div>
</div>
<h1 className='mt-5'>Key Insights</h1>
<div class=" container-sm  btn-group mt-5">

<button type="button" class="btn btn border dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Category : Entertainment
</button>
<button type="button" class="btn btn border dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Language : English
</button>

<button type="button" class="btn btn border dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Pricing Range : Low to High</button>

<button type="button" class="btn btn border  dropdown-toggle m-2 col-md-2" data-bs-toggle="dropdown" aria-expanded="false">
Reach/Impression : 150 Million</button>




</div>
</div>
</div>


<div className='container-xl  d-flex align-center justify-content-center p-5'>
<img src={img}></img>
<h1 className=' fs-1'>Advertising Options in HotStar, App
</h1>
</div>
<div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
<div class="card col-md-3 me-4">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3 mt-4">Spotlight Frames</h5>
  <p class="card-text fs-5 mt-5"><i class="bi bi-check-circle-fill"></i> Video & Display Ads<br/><i class="bi bi-check-circle-fill"></i> Roadblocks & Content Integrations <br/> <i class="bi bi-check-circle-fill"></i> Performance Campaigns</p>
  <button class="btn btn-dark text-white col-md-12 fs-4 mt-4" onClick={()=>{navigate("/gifts")}} >Login to View Price</button>
  </div>
</div>
<div class="card col-md-3 me-4">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3 mt-4">Mid Roll Ad CPM</h5>
  <p class="card-text fs-5 mt-5"><i class="bi bi-check-circle-fill"></i> Video & Display Ads<br/><i class="bi bi-check-circle-fill"></i> Roadblocks & Content Integrations <br/> <i class="bi bi-check-circle-fill"></i> Performance Campaigns</p>
  <a href="#" class="btn btn-dark text-white col-md-12 fs-4 mt-4">Login to View Price</a>
  </div>
</div>

<div class="card col-md-3 me-4">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3 mt-4">Pre Roll Ad CPM</h5>
  <p class="card-text fs-5 mt-5"><i class="bi bi-check-circle-fill"></i> Video & Display Ads<br/><i class="bi bi-check-circle-fill"></i> Roadblocks & Content Integrations <br/> <i class="bi bi-check-circle-fill"></i> Performance Campaigns</p>
  <a href="#" class="btn btn-dark text-white col-md-12 fs-4 mt-4">Login to View Price</a>
  </div>
</div>
</div>
<div className='container-fluid   d-flex align-center justify-content-center   mt-5'>
<div class="card col-md-3 me-4">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3 mt-4">Spotlight Frames</h5>
  <p class="card-text fs-5 mt-5"><i class="bi bi-check-circle-fill"></i> Video & Display Ads<br/><i class="bi bi-check-circle-fill"></i> Roadblocks & Content Integrations <br/> <i class="bi bi-check-circle-fill"></i> Performance Campaigns</p>
  <a href="#" class="btn btn-dark text-white col-md-12 fs-4 mt-4">Login to View Price</a>
  </div>
</div>
<div class="card col-md-3 me-4">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3 mt-4">Mid Roll Ad CPM</h5>
  <p class="card-text fs-5 mt-5"><i class="bi bi-check-circle-fill"></i> Video & Display Ads<br/><i class="bi bi-check-circle-fill"></i> Roadblocks & Content Integrations <br/> <i class="bi bi-check-circle-fill"></i> Performance Campaigns</p>
  <a href="#" class="btn btn-dark text-white col-md-12 fs-4 mt-4">Login to View Price</a>
  </div>
</div>

<div class="card col-md-3 me-4">
  <img src={hotstar} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title fw-bolder fs-3 mt-4">Pre Roll Ad CPM</h5>
  <p class="card-text fs-5 mt-5"><i class="bi bi-check-circle-fill"></i> Video & Display Ads<br/><i class="bi bi-check-circle-fill"></i> Roadblocks & Content Integrations <br/> <i class="bi bi-check-circle-fill"></i> Performance Campaigns</p>
  <a href="#" class="btn btn-dark text-white col-md-12 fs-4 mt-4">Login to View Price</a>
  </div>
</div>
</div>
<p className='fs-5 ms-5 mt-5 '>Hotstar is a digital video streaming platform with a vast array of over 100,000 hours of television content and an extensive user base of over 150 <br/> million people. Hotstar ads or Hotstar Advertisements provide high-impact marketing tools that can help increase visibility and promote brand <br/> awareness.</p>
<h1 className='fs-1 ms-5 mt-5'>How To Do Hotstar Advertisement With Excellent Publicity</h1>

<p className='fs-5 ms-5 mt-5 '>Ads in Hotstar is a top streaming service in India, and with its growing user base, it is becoming an excellent platform for advertisers to reach <br/> their target audience. With 50 + channels, 1300 TV shows, and 65000 hours of regional programming, brands can leverage digital advertising <br/> with Hotstar to publish ads that will reach millions of targeted viewers.</p>
<h1 className='fs-2 ms-5 mt-5'>What Are The Rates for In-App Advertising On Hotstar</h1>
<p className='fs-5 ms-5 mt-5 '>Hotstar ads has emerged as the frontrunner among OTT platforms, commanding a staggering 75% of the market share and a viewership in the <br/> millions. With its ability to cater to diverse audiences, Hotstar has become a preferred choice for brands across various domains, such as <br/> telecom, e-commerce, food and more.</p>
<p className='fs-5 ms-5 mt-5 '>For digital advertising for businesses on Hotstar Excellent Publicity provides an exhaustive range of cost models to choose from, including CPM, <br/> CPL, CPC, and CPA, ensuring that brands can select the most suitable option. With Hotstar advertising cost starting at a minimum of INR 2,50,000, <br/> brands can leverage the platform to drive their marketing campaigns to success. Contact us to know how we can get you the best rates.</p>
<h1 className='fs-3 ms-5 mt-5'>Benefits of Choosing Hotstar for In-App advertising</h1>
 
<h1 className='fs-5 ms-5 mt-5'>Advertising on Hotstar CTV brings a bunch of different benefits to the table:</h1>
 
<p className='fs-5 ms-5 mt-3'>Largest growing audience: With over 300 million viewers and growing, your end-audience is one of the largest in the world.</p>
<p className='fs-5 ms-5 mt-5'>Made for the Next Gen: Hotstar Advertising or Hotstar ads caters to the younger demographic, with a significant 69% of its target audience <br/> falling within the age range of 18 to 34 years.</p>
<p className='fs-5 ms-5 mt-5'>Multiple Ad Formats: Offering Pre-roll, Mid-roll, Instream-display and other popular ad formats, Hotstar In-app advertisement facility have <br/> something for every brand.</p>


<div className='container-fluid '>
<div className='col-md-10 rounded border  ms-5'>
<h1 className='ms-5 mt-5 fs-1'>How Does Hotstar Advertisement Work</h1>

<h1 className=' ms-5 mt-5 fs-3'>Let us know your requirements</h1>
<p className='ms-5 mt-5 fs-5 '>Share your advertising needs and preferences with team Excellent Publicity to begin a campaign.</p>

<h1 className='ms-5 mt-5 fs-3'>Partner with us for digital success</h1>
<p className='mt-5 ms-5 fs-5'>Our team will then help you in selecting the perfect audience, ad format, and other important factors.</p>
<h1 className='mt-5 ms-5 fs-3'>Affordable rates, top-notch services</h1>
<p className='mt-3 ms-5 fs-5'>We offer unbeatable rates for Hotstar and other advertising platforms, with prices varying based on the chosen app.</p>

<h1 className='mt-5 ms-5 fs-3'>Provide striking visuals</h1>
<p className='mt-3 ms-5 fs-5'>Submit an eye-catching visual in CDR format for images or MOV format for videos to showcase your brand on-screen.</p>
 <h1 className='mt-5 ms-5 fs-3'>Get your brand on-screen</h1>
 <p className='mt-3 ms-5 fs-5'>We’ll launch your brand on the Hotstar screen and you’ll soon start receiving the projected responses.</p>
 <h1 className='mt-5 ms-5 fs-3'>Every Bit Monitors</h1>
 <p className='mt-3 ms-5 fs-5'>Stay updated on your brand’s progress with highly detailed ad campaign reports from our team.</p>
</div>
</div>


 <h1 className='mt-5 ms-5 fs-3'>Why You Should Prefer Working With Excellent Publicity for Hotstar In-<br/> App advertising</h1>
 <p className='mt-5 ms-5 fs-4'>Working with experienced digital advertising agencies like Excellent Publicity can help you get the most out of your in-app advertising campaigns.<br/> We offer highly personalised ad strategies to optimise the campaign to get maximum brand reach. Our USPs are:</p>
 <h2 className='mt-5 ms-5  '>Campaign optimization for maximum brand exposure</h2>
 <p className='mt-2 ms-5 fs-5'><i class="bi bi-circle-fill"></i> National and international presence</p>
 <p className='mt-2 ms-5 fs-5'><i class="bi bi-circle-fill"></i> 11+ years of media planning and buying experience</p>
 <p className='mt-2 ms-5 fs-5'><i class="bi bi-circle-fill"></i> For top-performing online ad campaigns, talk to us today.</p>
 
 <h1 className='mt-5 ms-5 fs-3 mt-5'>How to Get Started?</h1>
 <div className='container-fluid d-flex align-center mt-5 ms-5'>
 
 

 <div class="card col-md-3 ms-5">
 
 <div className='col-md-1 circ bg-danger text-white rounded-circle '>1</div>
  <div class="card-body text-center rounded " >
    <h5 class="card-title" >Share your requirements</h5>
    <p class="card-text">Approach our efficient planners and executors and <br/> share your requirements <br/> for a campaign.</p>
    
  </div>
</div>
<div class="card col-md-3 ms-5">
 
<div className='col-md-1 circ bg-danger text-white rounded-circle '>2</div>
<div class="card-body text-center  rounded">
  <h5 class="card-title">Plan the campaign with us</h5>
  <p class="card-text">We will assist you in terms of choosing <br/> the target audience, right ad format, <br/> audience reach, and campaign <br/> duration to have a successful <br/> campaign on the digital platform.</p>
  
</div>
</div>

<div class="card col-md-3 ms-5">
 
<div className='col-md-1 circ bg-danger text-white rounded-circle '>3</div>
<div class="card-body text-center rounded">

  <h5 class="card-title">Receive the best quotes</h5>
  <p class="card-text">We provide lowest assured rates with best <br/> services for Digital Marketing <br/> across various Apps. The advertising <br/> rates differ depending on the App that <br/> is selected</p>
  
</div>
</div>
</div>
<div className='container-fluid d-flex align-center mt-5 ms-5'>
 <div class="card col-md-3 ms-5">
  
<div className='col-md-1 circ bg-danger text-white rounded-circle '>4</div>
  <div class="card-body text-center rounded">
    <h5 class="card-title">Provide Creative</h5>
    <p class="card-text">Provide us with an attractive creative to <br/> showcase your brand on-screen. The <br/> acceptable format of creative in cinema <br/> advertising is a CDR file for image creative <br/> and a MOV File for Video Creatives.</p>
    
  </div>
</div>
<div class="card col-md-3 ms-5">
  
<div className='col-md-1 circ bg-danger text-white rounded-circle '>5</div>
<div class="card-body text-center">
  <h5 class="card-title">Go Live</h5>
  <p class="card-text">See your brand hit on-screen within a <br/> bare minimum timeframe and achieve a <br/> grandstanding response.</p>
  
</div>
</div>
<div class="card col-md-3  ms-5">
  
<div className='col-md-1 circ bg-danger text-white rounded-circle '>6</div>
<div class="card-body text-center ">
  <h5 class="card-title">Receive Campaign Reports</h5>
  <p class="card-text">Campaign Reports will be shared with <br/> you on regular intervals, to keep you <br/> updated with the campaign <br/> Performance</p>

  
</div>
</div>
</div>

<div className='Container-fluid ms-5 mt-5 ' >
 <h1>Digital Advertising in Entertainment</h1>
 <div className='container row mt-5'>
 <div className='col-md-4 fs-4'>
  <ul>
  <li>Luxury Launches, Website</li>
  <li>Radio City, Website</li>
  <li>LIFESTYLE BY PS, Website</li>
  <li>The Logical Indian, Website</li>
  <li>Arre, Website</li>
  <li>ShemarooMe</li>
  </ul>
 
 </div>
 <div className='col-md-4 fs-4  '>
  <ul>
  <li>Luxury Launches, Website</li>
  <li>Radio City, Website</li>
  <li>LIFESTYLE BY PS, Website</li>
  <li>The Logical Indian, Website</li>
  <li>Arre, Website</li>
  <li>ShemarooMe</li>
  </ul>
 
 </div>
 </div>



</div>
<div className='container-xl d-flex text-center mt-5 sell bg-danger'>
<div className='container-md ms-md-5 p-md-5'>
  <h1 className='text-white'>Reach out to our Media Expert for more details about <br/> Digital Advertising</h1>
 
  <button type='button' className='btn btn-light border col-md-4 fs-5 fw-bolder mt-5' disabled>
    Contact us <i className='bi bi-arrow-right-circle-fill'></i>
  </button>
</div>
</div>



    </>
  )
}

export default Hotstar