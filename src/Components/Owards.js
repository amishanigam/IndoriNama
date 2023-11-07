import React from 'react'
import img from '../assest/Rectangle 40191.png'
import vec from '../assest/_x33_8-Award_symbol.png'
import vector from '../assest/Vector.png'
import grp from '../assest/Group 1163 (1).png'

function Owards() {
    return (
        <>
            <div className='container-fluid mt-5 border me-5                                                                                            d mt-2'>
                <div className='d-flex flex-direction-row  justify-content-center'>
                    <img src={img}></img>
                    <h1 className='textcenter mt-5 fs-1'>Our Latest Awards</h1>
                </div>
                <div className='d-flex flex-direction-row'>
              
               
                <div className='card all border-0 '>
               
                    <div class="row">
                    <img class="col-md-3 " className='leafs' src={vec} ></img>
                    
                    <div class="col-md-3 ">
                     
                    <div class="card clip">
                        <div class="card-body cad text-dark rounded">
                        <img src={grp}></img>
                        <h1 className='fs-6'>Best <br/> support</h1>
                        <button type="button" class="btn btn-secondary btn">Secondary</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 ">
                     
                <div class="card clip">
                    <div class="card-body cad text-dark rounded">
                    <img src={grp}></img>
                    <h1 className='fs-6'>Best <br/> support</h1>
                    <button type="button" class="btn btn-secondary btn ">Secondary</button>
                    </div>
                </div>
            </div>


            <div class="col-md-3 ">
                     
            <div class="card clip">
                <div class="card-body cad text-dark rounded">
                <img src={grp}></img>
                <h1 className='fs-6'>Best <br/> support</h1>
                <button type="button" class="btn btn-secondary btn">Secondary</button>
                </div>
            </div>
        </div>
                        <img class="col-md-3 "  className='leafs' src={vector} ></img>

                        </div>

                        </div>

                </div>

            </div>
        </>
    )
}

export default Owards