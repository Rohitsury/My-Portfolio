import React from 'react'
import '../css/Style.css'
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
        <div id="chessboard">
            <section id='navbar'>
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <div class="container">
                        <a class="navbar-brand fw-bold fs-4" href="/" style={{color:'orange'}}></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id='navbarul'>
                                <li class="nav-item ms-lg-5" id="menu" >
                                    <a class="nav-link active" href="#about">About</a>
                                </li>
                                <li class="nav-item ms-lg-5 bg-md-dark" id="menu" >
                                    <a class="nav-link active" aria-current="page" href="#project">Projects</a>
                                </li>
                                <li class="nav-item ms-lg-5" id="menu" >
                                    <a class="nav-link disabled" aria-current="page" href="/" aria-disabled>Experience</a>
                                </li>
                                <li class="nav-item ms-lg-5" id="menu" >
                                    <a class="nav-link disabled" aria-current="page" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                 
                <section id="home">
                        <HomePage/>
                </section>
                <section id="about">
                        <About/>
                        
                </section>
                <section id="project">
                        <Projects/>
                </section>
                <section id="footer">
                        <Footer/>
                </section>
            </section>
            </div>
        </>
    )
}

export default Navbar