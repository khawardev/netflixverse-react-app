/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './heroBanner.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/Usefetch';
import { useSelector } from 'react-redux';
import Lazyloadimage from '../../../components/lazyLoadImage/LazyloadImage'
import BackgroundImage from '../../../assets/Background.png'
const HeroBanner = () => {

  const { data, loading } = useFetch("/movie/upcoming") // set url for fetching images from api
  const [Background, SetBackground] = useState(""); // set background images into state

  const Navigate = useNavigate(); // For navigating to search/query
  const [query, setquery] = useState(''); // setquery from input into the state
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) { // function to handle on Enter event
      Navigate(`/search/${query}`)
    }
  }

  const { url } = useSelector((state) => state.home) // destructuring url from Home Slice


 
  useEffect(() => {
    const Bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    SetBackground(Bg);
  }, [data]);


  return (
    <>
      <div className="container-fluid text-white ">
        <div className="row text-center " >
          <div className="col-12 p-0" >
            <div className="hero-banner">
              <div className="opacity-layer-2">
                <Lazyloadimage
                  src={Background ? Background : BackgroundImage}
                  alt="Hero Banner"
                  className="banner-image"
                />
                <div className="opacity-layer"></div>

              </div>

              <div className="banner-content">
                <h1 className="banner-title">Welcome.</h1>
                <p className="banner-subtitle">
                  Millions of movies, TV shows and people to discover. Explore now.
                </p>

                <div className="banner-search">
                  <input
                    type="text"
                    placeholder="Search for movie or TV series"
                    className="search-input"
                    onChange={(event) => setquery(event.target.value)}
                    onKeyUp={searchQueryHandler}
                  />

                  <button type="submit" className="search-button">
                    Search
                  </button>


                </div>
              </div>
            </div>

          </div>

        </div>
      </div>








    </>
  )
}

export default HeroBanner