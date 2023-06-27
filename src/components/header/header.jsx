/* eslint-disable no-unused-vars */
import React from 'react'
import './header.scss';
import logo from '../../assets/movix-logo.png'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/Netflix.png'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
const Header = () => {

    const navigate = useNavigate();

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
        setClick(false); // Reset click state when navigating to a new page
    };
    const handleheaderclick = () => {
        setIsColorChanged(!isColorChanged);
    }
    useEffect(() => {
        setClick(false); // Reset click state when the component mounts or updates
    }, []);


    const [isColorChanged, setIsColorChanged] = useState(false);




    return (
        <>

            <div className={`header ${scrollPos > 100 || isColorChanged ? 'navbar--blur' : 'navbar--blur-reset'}`}>

                <div className='container-md container-fluid '>
                    <div className='logo' >
                        <img onClick={() => navigate('/')} src={Logo} width="90px" />
                    </div>
                    <div className="list">
                        <span className={click ? 'nav-menu active nav-menu-transition' : 'nav-menu'} style={{ display: isMenuOpen }}>

                            <li>
                                <span onClick={() => { navigate('/'); handleMenuItemClick(); }}>Movies</span>
                            </li>
                            <li>
                                <span onClick={() => { navigate('/about'); handleMenuItemClick(); }}>Tv Series</span>
                            </li>

                        </span>
                    </div>
                    <label className="hamburger" >
                        <input type="checkbox" onClick={() => { handleClick(); setIsMenuOpen(!isMenuOpen); handleheaderclick(); }} />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>

                        </svg>
                    </label>

                </div>
            </div>

        </>
    );
}

export default Header