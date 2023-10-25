import React from 'react'
import myimg from '../Assets/my.jpg'
function About() {
    return (
        <>
            <div className="container">
                <h1 id='resume'>ABOUT</h1>
                <div className="row mt-lg-5 mt-4">
                    <div className="col-lg-3 col-sm-12">
                        <img src={myimg} className='img-fluid' id="myimg" alt="" />
                    </div>
                    <div className="col-lg-9 col-sm-12 mt-4 mt-lg-0 text-center text-lg-start">
                        <div className="row">
                            <div className="col-lg-5 col-sm-12"  >
                                <h3 id='pers' className=''>EDUCATION</h3>
                                <h5 id="course" className='badge text-center bg-white text-dark mt-3'>Master Of Computer Application </h5>
                                <p className='text-white'>KLE Dr. M. S. Sheshgiri Collge Of Engineering And Technology, Belagum <br /> 2021-23 </p>

                                <h5 id="course" className='badge bg-white text-dark'> Bachelor Of Computer Application </h5>
                                <p className='text-white'>SKE's GSS College Belgaum<br /> 2018-21 </p>
                            </div>
                            <div className="col-lg-5 col-sm-12 mt-lg-o mt-4">
                                <h3 id='pers'>SKILLS</h3>
                                <div className="row">
                                    <h5>
                                        <span className='badge bg-white text-dark me-3'>HTML / CSS</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>JavaScript</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>React Native</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>React Js</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>Node Js</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>Express Js</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>Mongo DB</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>PHP</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>SQL</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>Python</span>
                                        <span className='badge bg-white text-dark me-3 mt-3'>C Programming</span>
                                    </h5>

                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 mt-lg-o mt-4">
                                <h3 id='pers'>PROJECTS</h3>
                                <div class="card text-white mb-3" style={{background:'transparent'}}>
                                        
                                    <div class="card-body">
                                        <h5 class="card-title fs-1 fw-bold w-100 text-center">6</h5>
                                     </div>
                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About