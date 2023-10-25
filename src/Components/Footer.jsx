import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <>
    <div className="container">
        <center>
            <div className="row text-white mt-5 mb-3">
                <div className="col-8">
                        <h6 id="footertext" className='pt-2'>
                            <CopyrightIcon id="copyicon"/> 
                            <span> ROHIT SURYAVANSHI 2023 | ALL RIGHTS RESERVED
                            </span>
                        </h6>
                </div>
                <div className="col-4 mb-3">
                    <a href="https://www.linkedin.com/in/rohit-suryavanshi-21a350224" target='_blank' className='text-white'><LinkedInIcon className="me-3 fs-4"/></a>  
                    <a href="https://www.instagram.com/______r__o__h__i__t______/"  target='_blank'className='text-white'><InstagramIcon className="  fs-4"/></a>
                </div>
            </div>
            </center>
        </div>
    </>
  )
}

export default Footer