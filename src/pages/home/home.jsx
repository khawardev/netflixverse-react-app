/* eslint-disable no-unused-vars */
import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './Trending/Trending.jsx'
import Popular from './Popular/Popular'
import TopRated from './topRated/TopRated'
const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    )
}

export default Home