/* eslint-disable no-unused-vars */
import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './Trending/Trending.jsx'
const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <Trending />
        </div>
    )
}

export default Home