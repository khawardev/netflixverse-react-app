/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import DetailsBanner from './detailsBanner/detailsBanner.jsx'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/Usefetch.jsx';
import Cast from '../../components/cast/cast.jsx';
import VideosSection from '../../components/videosSection/videosSection.jsx';
const details = () => {

  const { mediaType, id } = useParams();
  const { data, loading  } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      {data?.results && (
        <DetailsBanner video={data.results[0]} crew={credits?.crew} />
      )}
      {credits && (
        <Cast data={credits?.cast} loading={creditsLoading} />
      )}
      <VideosSection data={data} loading={loading} />
    </div>
  );

}

export default details