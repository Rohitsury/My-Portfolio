import React from 'react'
import Placemaster from '../Assets/placemaster.png'
import gofood from '../Assets/gofood.png'
import lfm from '../Assets/LFM.png'
import stock from '../Assets/stcok.png'
import tour from '../Assets/tour.png'
import alumni from '../Assets/alumni.png'
import { NavLink,  Navigate } from 'react-router-dom'
import Footer from '../Components/Footer'
function AllProjects() {

    const projects = [
        {
            title: 'Placemaster',
            subtitle: 'College Placement Management System',
            img: Placemaster,
            technology: 'MERN Stack',
          
        },
        {
            title: 'Go Food',
            subtitle: 'Online Food Delivery Application',
            img: gofood,
            technology: 'MERN Stack',
            to: 'https://rohitsuryavanshigofood.netlify.app/'
        },
        {
            title: 'Look For Medicine',
            subtitle: 'Nearest Medical Finder Based On Searched Medicine',
            img: lfm,
            technology: 'MERN Stack',
            to: 'https://rohitsuryavanshi-lfm.netlify.app/'
        },
        {
            title: 'Alumni Portal',
            subtitle: 'College Alumni Portal',
            img: alumni,
            technology: 'MERN Stack',
            
        },
        {
            title: 'TouristHub',
            subtitle: 'WebSite For Tourist To Find The Best Place And Guide',
            img: tour,
            technology: 'HTML / CSS / PHP / SQL',
             
        },
        {
            title: 'Stock Price Prediction Using Deep Learning',
            subtitle: 'Predicting Future Stock Values Based On Historical Data',
            img: stock,
            technology: 'Python , LSTM',
             
        },
    ]

    const opendiv = (to) =>{
      if(to === '#')
      {
          alert("Coming Soon....")
      }
      else{
        window.open(to);
      }

    }
    return (
        <>
            <div id="chessboard">
                <section id='navbar'>

                    <section id="project">
                        <div className="container">
                            <h1 id='allproj'>PROJECT</h1>
                            <div className="row  d-flex justify-content-between">
                                {projects.map((project, index) => (

                                    <div className="col-12 col-lg-4 mt-3" key={index} id="projectcol"  >
                                        <div id='projcol' className='p-3'>
                                            <img src={project.img} alt="" id='projimg' />
                                        </div>
                                        <h3 id='projtitle'>{project.title}</h3>
                                        <h6 id="subtitle">{project.subtitle}</h6>
                                        <h6 className="badge bg-white text-dark">Technology : {project.technology}</h6>
                                        <div className='mb-3'>
                                            {
                                                project.to ? (<NavLink  to={project.to}>View Demo</NavLink>):(<p className='text-secondary'>Coming Soon...</p>)
                                            }
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <NavLink to='/'><button id="dmbtn">Back</button></NavLink>
                        </div>
                    </section>
                    <section id="footer">
                        <Footer />
                    </section>
                </section>
            </div>
        </>
    )
}

export default AllProjects