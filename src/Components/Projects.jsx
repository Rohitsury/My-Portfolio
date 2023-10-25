import React from 'react'
import Placemaster from '../Assets/placemaster.png'
import gofood from '../Assets/gofood.png'
import lfm from '../Assets/LFM.png'
import { NavLink } from 'react-router-dom'
function Projects() {

    const opendiv = ()=>{
        alert("Coming Soon....")
    }
    return (
        <div>
            <div className="container">
                <h1 id='proj'>PROJECT</h1>
                <div className="row  d-flex justify-content-between">
                  
                    <div className="col-12 col-lg-4" id="projectcol">
                        <div id='projcol' className='p-3'>
                            <img src={Placemaster} alt="" id='projimg' />
                        </div>
                        <h3 id='projtitle'>Placemaster</h3>
                        <h6 id="subtitle">College Placement Management System</h6>
                        <div className='mb-3'>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4" id="projectcol" >
                        <div id='projcol' className='p-3'>
                            <img src={gofood} alt="" id='projimg' />
                        </div>
                        <h3 id='projtitle'>Go Food</h3>
                        <h6 id="subtitle">Online Food Delivery App</h6>
                        <div className='mb-3'>
                        <NavLink to="https://rohitsuryavanshigofood.netlify.app/">View Demo</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4" id="projectcol" >
                        <div id='projcol' className='p-3'>
                            <img src={lfm} alt="" id='projimg' />
                        </div>
                        <h3 id='projtitle'>Look For Medicine</h3>
                        <h6 id="subtitle">Nearest Medical Finder Based On Searched Medicine</h6>
                        <div className='mb-3'>
                        <NavLink to='https://rohitsuryavanshi-lfm.netlify.app/'>View Demo</NavLink>
                        </div>
                    </div>
                 
                </div>
                <NavLink to='/projects'><button className='btn' id="dmbtn">See All Projects</button></NavLink> 
            </div>
        </div>
    )
}

export default Projects