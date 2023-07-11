/* eslint-disable no-unused-vars */
import './footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeart } from 'react-icons/fa';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="container-md container-fluid  text-white  py-2">
        <div className="row p-2  text-center pt-3">
          <div className="col-12 d-md-flex gap-2 align-items-center justify-content-center text-center ">
            <div className='my-2 gap-2 d-flex align-items-center justify-content-center text-center' >
              <div className='button-background-move'>
                <span className="button-text" >Terms of use</span>
                <div className="fill-container"></div>
              </div>
              <div className='button-background-move'>
                <span className="button-text" >Movies</span>
                <div className="fill-container"></div>
              </div>

            </div>
            <div className='my-2 gap-2 d-flex align-items-center justify-content-center text-center'>
              <div className='button-background-move'>
                <span className="button-text" >Tv series</span>
                <div className="fill-container"></div>
              </div>
              <div className='button-background-move'>
                <span className="button-text" >Privacy Policy</span>
                <div className="fill-container"></div>
              </div>
            </div>

          </div>
          <div className='text-center my-4' style={{ fontStyle: 'italic' }}>
            <p>Discover millions of movies and TV shows on Movix, the ultimate entertainment website. Get ready for an endless cinematic adventure with Movix.</p>
          </div>
          <div className=' gap-md-3 gap-3 d-flex align-items-center justify-content-center  '>
            <div className='button-background-move-icon'>
              <span ><FontAwesomeIcon className='button-text' icon={faYoutube} style={{ fontSize: '20px' }} /></span>
              <div className="fill-container"></div>
            </div>
            <div className='button-background-move-icon'>
              <span ><FontAwesomeIcon className='button-text' icon={faFacebook} style={{ fontSize: '20px' }} /></span>
              <div className="fill-container"></div>
            </div>
            <div className='button-background-move-icon'>
              <span ><FontAwesomeIcon className='button-text' icon={faTwitter} style={{ fontSize: '20px' }} /></span>
              <div className="fill-container"></div>
            </div>
            <div className='button-background-move-icon'>
              <span ><FontAwesomeIcon className='button-text' icon={faInstagram} style={{ fontSize: '20px' }} /></span>
              <div className="fill-container"></div>
            </div>
          </div>
          <p className='text-center mt-4 ' style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize:'17px' }}>Made with &nbsp; <span > <FaHeart color='#da0101'/> </span> &nbsp; by Khawar Sultan</p>
        </div>
       
      </div>
  



    </>
  )
}

export default Footer