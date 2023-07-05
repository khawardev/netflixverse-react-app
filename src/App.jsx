/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeslice';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/header.jsx'
import Footer from './components/footer/footer'
import Home from './pages/home/home';
import Details from './pages/details/details'
import SearchResult from './pages/searchResult/searchResult'
import Explore from './pages/explore/explore.jsx'
import PageNotFound from './pages/404/pageNotFound'
import Trending from './pages/home/Trending/Trending.jsx';
import ScrollToTop from './components/scrollToTop.jsx';

const App = () => {



  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    fetchApiConfig();
    genercall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log("Response from api ", res);

        // set secure_base_url url for fetching image
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))

      });
  };


  const genercall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`)); // Modified line
    });
    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => {
        allGenres[item.id] = item
      })
    });
    dispatch(getGenres(allGenres)) // store all genres ids in genresstore
    // console.log("all id of genres : ", allGenres);
  }


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
        {/* <Route path='/trending' element={<Trending />} /> */}

      </Routes>
      <ScrollToTop />
    </BrowserRouter>


  )
}

export default App;
