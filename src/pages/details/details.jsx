/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import DetailsBanner from './detailsBanner/detailsBanner.jsx'
import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/Usefetch.jsx';
import Cast from '../../components/cast/cast.jsx';
import VideosSection from '../../components/videosSection/videosSection.jsx';
import Similar from '../../components/carousels-ll/Similar.jsx';
import Recommendation from '../../components/carousels-ll/Recomendation.jsx';
import SkLoad from '../../components/skLoad/skLoad.jsx';

const details = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll window to top
  });
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  const matchingTrailers = data?.results?.filter(result =>
    result.name.includes("Trailer")
  );
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1300);
    return () => clearTimeout(timeout);
  }, [location]);

  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDetails(true);
    }, 900);

    return () => clearTimeout(timeout);
  }, [location]);

  const [showDetails2, setShowDetails2] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDetails2(true);
    }, 1600);

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
      {show && (< SkLoad />)}
      {data?.results && showDetails && (
        <DetailsBanner video={matchingTrailers} crew={credits?.crew} />
      )}
      {showDetails2 && (
        <>
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

      )}


    </>
  );

}

export default details