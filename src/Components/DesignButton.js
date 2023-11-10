import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DesignButton() {

 
 const navigate = useNavigate()

  return (
    <>

      <div className='container d-flex flex-direction-row sell   p-4 mt-3  '>
        <button type="button" class="btn btn-dark fw-bolder col-sm-2 me-2">Designing</button>
        <button type="button" class="btn btn-secondry border fw-bolder rounded-5 col-sm-2 me-2" onClick={()=>{navigate("/main")}}> Digital Marketing</button>
        <button type="button" class="btn btn-secondry border fw-bolder rounded-5 col-sm-2 me-2">Printing</button>
        <button type="button" class="btn btn-secondry border fw-bolder rounded-5  col-sm-2 me-2">Corporate Gifting</button>
        <button type="button" class="btn btn-secondry border fw-bolder rounded-5 col-sm-2 me-2">In Shop Branding</button>
        <button type="button" class="btn btn-secondry border fw-bolder rounded-5 col-sm-2 me-2">Packaging</button>
      </div>
    </>
  )
}
