/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './searchResult.scss'
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";

const searchResult = () => {

  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams()

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false)
    })
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data, results: [...data?.results, ...res.results]
        })
      } else {
        setData(res)
      }

    })
  }


  useEffect(() => {
    setPageNum(1)
    fetchInitialData();
  }, [query])
  return (
    <div className="searchResultsPage container">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle bolder" style={{fontStyle:'italic'}}>
                {`Search ${data?.totalresults > 1 ? "results" : "result"
                  } of '${query}'`}
              </div>
              <InfiniteScroll className='content' dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item?.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  )
                })}
              </InfiniteScroll>

            </>
          ) : (
            <span className="resultNotFound bolder" style={{fontStyle:'italic'}}>Sorry, Results not found!</span>
          )}
        </>
      )}
    </div>
  );
}


export default searchResult