/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './heroBanner.scss'
import John from '../../../assets/John wick.png';
import Spiderman from '../../../assets/Spiderman.png';
import extraction from '../../../assets/Extraction.png';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/Usefetch';
import { useSelector } from 'react-redux';
import Lazyloadimage from '../../../components/lazyLoadImage/LazyloadImage'
import ContentWrapper from '../../../components/contentWrapper/contentWrapper'
const HeroBanner = () => {

  const { data, loading } = useFetch("/movie/upcoming") // set url for fetching images from api

  const [Background, SetBackground] = useState(""); // set background images into state

  const [query, setquery] = useState(''); // setquery from input into the state

  const Navigate = useNavigate(); // For navigating to search/query

  const { url } = useSelector((state) => state.home) // destructuring url from Home Slice


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) { // function to handle on Enter event
      Navigate(`/search/${query}`)
    }
  }

  useEffect(() => {
    const Bg = url?.backdrop + data?.results?.       // set proper url of image from fetching home slice
    [Math.floor(Math.random() * 20)]?.backdrop_path;
    SetBackground(Bg);
  }, [data]);



  return (
    <>



      <div className="container-fluid text-white">
        <div className="row text-center " >
          <div className="col-12 p-0" >
            <div className="hero-banner">
              <div className="opacity-layer-2">
                <Lazyloadimage
                  src={url !== undefined ? Background : 'https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg'}
                  alt="Hero Banner"
                  className="banner-image"
                />
              </div>

              <div className="banner-content">
                <h1 className="banner-title">Welcome.</h1>
                <p className="banner-subtitle">
                  Millions of movies, TV shows and people to discover. Explore now.
                </p>

                <div className="banner-search">
                  <input type="text" placeholder="Search for movie or tv series" className="search-input" />
                  <button className="search-button">Search</button>
                </div>
              </div>

              <div className="opacity-layer"></div>

            </div>

          </div>

        </div>
      </div>








    </>
  )
}

export default HeroBanner