/* eslint-disable no-unused-vars */
import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './Trending/trending.jsx'
import Popular from './Popular/popular'
import TopRated from './topRated/topRated'
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