import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function HomePage() {
    return (
        <>
            <div className='mt-5 container'>
                <center>
                    <h1>Full-Stack Developer</h1>
                    <h2> <span id="texthello" className='mb-3'> Hello</span >
                        <br className='mb-3' />
                        <span className='text-white fw-bold' id='textname'> THIS IS <span style={{ color: 'orange' }}> ROHIT SURYAVANSHI </span> </span></h2>
                    <h5 className='text-white mt-0 mt-lg-4' id='infotext'>I’m a full stack developer. I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.</h5>

                    <div>
                        <a href="https://www.linkedin.com/in/rohit-suryavanshi-21a350224" target='_blank'><LinkedInIcon className='' id="socialicons" /></a>
                        <a href="https://www.instagram.com/______r__o__h__i__t______/" target='_blank'><InstagramIcon className='' id="socialicons" /></a>
                    </div>
                    <h5 className='text-white' id='degtext'>All BCA / MCA / BECSE / Diploma CSE Projects Will be Done</h5>
                   <a href="https://www.instagram.com/______r__o__h__i__t______/" target='_blank'> <button className='btn' id="dmbtn">Dm For Project</button></a>   
                </center>
            </div>
        </>
    )
}

export default HomePage