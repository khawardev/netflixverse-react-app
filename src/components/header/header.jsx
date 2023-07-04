/* eslint-disable no-unused-vars */
import React from 'react'
import './header.scss';
import logo from '../../assets/movix-logo.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/Netflix.png'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useRef } from 'react';
const Header = () => {

    const Navigate = useNavigate();
    const checkboxRef = useRef(null);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [scrollPos, setScrollPos] = useState(0);
    const [isColorChanged, setIsColorChanged] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [query, setQuery] = useState('');

    // const location = useLocation();
    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll window to top
    // }, [location]);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll window to top
    }, [location]);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuItemClick = () => {    // open menu bar list in mobile view
        setClick(false); // Reset click state when navigating to a new page
        setIsColorChanged(!isColorChanged); // Reset Color when navigating to a new page
        checkboxRef.current.click(); // Trigger the checkbox click event
    };
    const handleheaderColorclick = () => {
        setIsColorChanged(!isColorChanged);
    }
    useEffect(() => {
        setClick(false); // Reset click state when the component mounts or updates
    }, []);




    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);

    };

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) { // function to handle on Enter event
            Navigate(`/search/${query}`)
            setTimeout(() => {
                setSearchVisible(!searchVisible);
            }, 300);
            handleMenuItemClick();
        }

    }

    return (
        <>

            <div className={`header ${scrollPos > 100 || isColorChanged ? 'navbar--blur' : 'navbar--blur-reset'}`}>

                <div className='container-md container-fluid '>
                    <div className='logo' >
                        <img onClick={() => { Navigate('/'); }} src={Logo} width="90px" />
                    </div>
                    <div className="list">
                        <span className={click ? 'nav-menu active nav-menu-transition' : 'nav-menu'} >
                            <li>
                                <span onClick={() => { Navigate('/explore/movie'); handleMenuItemClick(); }}>Movies</span>
                            </li>
                            <li>
                                <span onClick={() => { Navigate('/explore/tv'); handleMenuItemClick(); }}>Tv Series</span>
                            </li>

                            <li className="d-flex align-items-center justify-content-center gap-3 py-3 py-xl-0">
                                {searchVisible ? (
                                    <input
                                        type="text"
                                        className="search-input-header"
                                        autoFocus
                                        placeholder="search movies & tv series"
                                        onChange={(event) => setQuery(event.target.value)}
                                        onKeyUp={searchQueryHandler}
                                    />
                                ) : null}
                                {searchVisible ? (
                                    <BiX className="close-icon" onClick={handleSearchClick} />
                                ) : (
                                    <BiSearch className="search-icon" onClick={handleSearchClick} />
                                )}
                            </li>

                        </span>
                    </div>
                    <label className="hamburger" >
                        <input type="checkbox" ref={checkboxRef} onClick={() => { handleClick(); handleheaderColorclick(); }} />
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