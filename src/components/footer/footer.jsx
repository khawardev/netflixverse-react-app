/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <>
      <div className="container-md container-fluid  text-white bg-success">
        <div className="row p-2 p-md-5 ">
          <div className="col-12 d-md-flex gap-2 align-items-center justify-content-center text-center ">
            <div className='my-2 gap-2 d-flex align-items-center justify-content-center text-center'>
              <span className='Rounded-Footer-menu'>Terms of use</span>
              <span className='Rounded-Footer-menu'>About</span>
              <span className='Rounded-Footer-menu'>FAQ</span>
            </div>
            <div className='my-2 gap-2 d-flex align-items-center justify-content-center text-center'>
              <span className='Rounded-Footer-menu'>Privacy Policy</span>
            </div>

          </div>
          <div className='text-center my-4'>
            <p>Discover millions of movies and TV shows on Movix, the ultimate entertainment website. From timeless classics to the latest blockbusters, there is something for everyone. Connect with a passionate community of film lovers. Get ready for an endless cinematic adventure with Movix.</p>
          </div>
          <div className=' gap-md-3 gap-2 d-flex align-items-center justify-content-center  '>
            <span ><FontAwesomeIcon className='icon  ' icon={faYoutube} style={{ fontSize: '30px' }} /></span>
            <span ><FontAwesomeIcon className='icon' icon={faFacebook} style={{ fontSize: '30px' }} /></span>
            <span ><FontAwesomeIcon className='icon' icon={faTwitter} style={{ fontSize: '30px' }} /></span>
            <span ><FontAwesomeIcon className='icon' icon={faInstagram} style={{ fontSize: '30px' }} /></span>
          </div>

        </div>
      </div>




    </>
  )
}

export default Footer