/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import DetailsBanner from './detailsBanner/detailsBanner.jsx'
import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/Usefetch.jsx';
import Cast from '../../components/cast/cast.jsx';
import VideosSection from '../../components/videosSection/videosSection.jsx';
import Similar from '../../components/carousels-ll/Similar.jsx';
import Recommendation from '../../components/carousels-ll/Recomendation.jsx';
import SkLoad from '../../components/skLoad/skLoad.jsx';
const details = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll window to top
  }, [location]);


  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  const matchingTrailers = data?.results?.filter(result =>
    result.name.includes("Trailer")
  );

  return (
    <>
      {/* <SkLoad /> */}
      {data?.results && (
        <DetailsBanner video={matchingTrailers} crew={credits?.crew} />
      )}

      {credits && (
        <Cast data={credits?.cast} loading={creditsLoading} />
      )}
      {data?.results && (
        <VideosSection data={data} loading={loading} />
      )}
      {data?.results && (
        <>
          <Recommendation mediaType={mediaType} id={id} />
          <Similar mediaType={mediaType} id={id} />
        </>
      )}
    </>
  );

}

export default details