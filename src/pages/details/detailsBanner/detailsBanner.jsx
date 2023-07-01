/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './detailsBanner.scss';
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import useFetch from "../../../hooks/Usefetch";
import Genres from "../../../components/Genres/Genres";
import CircleRating from "../../../components/circleRating/circleRating";
import Img from "../../../components/lazyLoadImage/LazyloadImage.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import PlayButton from '../../../components/playButton/playButton';
const detailsBanner = ({ video, crew }) => {

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`)

    const { url } = useSelector((state) => state.home)

    const director = crew?.filter((f) => f.job === "Director")
    const writer = crew?.filter((f) => f.job === "ScreenPlay" || f.job === "Story" || f.job === "Writer")

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
    const skload = () => {
        return (
            <div className="detailsBannerSkeleton">
                <div className="left skeleton"></div>
                <div className="right">
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                    <div className="row skeleton"></div>
                </div>
            </div>

        )
    }
    const releaseDate = new Date(data?.release_date || data?.first_air_date);
    const formattedDate = releaseDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const runtime = data?.runtime || data?.episode_run_time || 0;
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return (
        <div className="detailsBanner container">
            {!loading ? (
                <>

                    {!!data && (



                        <React.Fragment>

                            <div className="backdrop-img">
                                <img src={url.poster + data.backdrop_path} className='banner-image ' alt="Movie Poster" />
                            </div>
                            <div className="opacity-layer"></div>
                            <div className="container-md container-fluid px-0">
                                <div className="row italic-bold">
                                    <div className="col-md-4 col-12 py-md-0 py-3">
                                        <div className="poster">
                                            <Img src={url.poster + data.poster_path} alt="Movie Poster" />
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-12 py-md-0 py-3">
                                        <div className="details">
                                            <div className='d-flex gap-2 align-items-center '>
                                                <h1 className='details-heading'>
                                                    {data.original_name || data.name || data.original_title || data.title}{' '}
                                                    <span className='details-heading ' style={{ color: 'var(--red)' }}>
                                                        {(data.release_date || data.first_air_date).split('-')[0]}
                                                    </span>
                                                </h1>
                                            </div>
                                            <h4 className='details-tagline '  >{data.tagline}</h4>
                                            <div className='d-flex gap-3 align-items-center py-3'>
                                                <CircleRating width={'55px'} height={'55px'} Rating={data.vote_average.toFixed(1)} />

                                                <Genres fontSize="16px" data={data.genres.map(genre => genre.id).slice(0, 2)} />

                                            </div>

                                            <p style={{ fontWeight: '500' }}>{data.overview}</p>

                                            <div className='d-flex pt-2 pb-4'>
                                                <div className='button-background-move ' style={{ padding: '0rem 1rem' }}>
                                                    <div className='playBut d-flex align-items-center'>
                                                        <div style={{ zIndex: '1' }}>
                                                            <PlayButton />
                                                        </div>
                                                        <span className="button-text" style={{ fontSize: '18px', fontWeight: 'bold' }} >Watch Trailer</span>
                                                        <div className="fill-container"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className=" py-2">
                                                <button className='playBut  detail-button '>
                                                    <div className='d-flex align-items-center'>
                                                        <PlayButton />
                                                        <span>
                                                            Watch Trailer
                                                        </span>
                                                    </div>

                                                </button>

                                            </div> */}
                                            <div className='d-md-flex gap-md-5' >

                                                <div className='d-flex gap-5' >

                                                    {data?.status && (
                                                        <div className='d-md-flex gap-3 '>
                                                            <p className='bolder'>Status : </p>
                                                            <p className='details-tagline ' style={{ fontWeight: '500', fontSize: '18px' }}>{data.status} </p>
                                                        </div>
                                                    )}

                                                    {data?.release_date && (
                                                        <div className='d-md-flex gap-3 '>
                                                            <p className='bolder '>Release date : </p>
                                                            <p className='details-tagline ' style={{ fontWeight: '500', fontSize: '18px' }}>{formattedDate} </p>
                                                        </div>
                                                    )}

                                                </div>
                                                <div >
                                                    {data?.runtime && (
                                                        <div className='d-flex gap-3'>
                                                            <p className='bolder'>Runtime: </p>
                                                            <p className='details-tagline' style={{ fontWeight: '500', fontSize: '18px' }}>{`${hours}h ${minutes}m`}</p>
                                                        </div>
                                                    )}


                                                </div>
                                            </div>


                                            <div className='directors ' >

                                                {director?.length > 0 && (
                                                    <>
                                                        <hr />
                                                        <div className='d-md-flex gap-3 '>
                                                            <p className='bolder'>Director: </p>
                                                            <p className='details-tagline' style={{ fontWeight: '500', fontSize: '18px' }}>
                                                                {director.map((d, index) => (
                                                                    <span key={index}>
                                                                        {d.name}
                                                                        {index !== director.length - 1 && ', '}
                                                                    </span>
                                                                ))}
                                                            </p>
                                                        </div>

                                                    </>
                                                )}

                                            </div>
                                            <div className='writer' >
                                                {writer?.length > 0 && (

                                                    <>
                                                        <hr />
                                                        <div className='d-md-flex gap-3'>

                                                            <p className='bolder'>Writer: </p>
                                                            <p className='details-tagline' style={{ fontWeight: '500', fontSize: '18px' }}>
                                                                {writer.map((d, index) => (
                                                                    <span key={index}>
                                                                        {d.name}
                                                                        {index !== writer.length - 1 && `, `}
                                                                    </span>
                                                                ))}
                                                            </p>
                                                        </div>
                                                    </>

                                                )}

                                            </div>
                                            {/* <div className="cast">
                                                <h3>Cast</h3>
                                                <div className="cast-images">
                                                    <img src={url.cast1} alt="Cast Member 1" />
                                                    <img src={url.cast2} alt="Cast Member 2" />
                                                    <img src={url.cast3} alt="Cast Member 3" />
                                                </div>
                                                <div className="cast-names">
                                                    <p>Cast Member 1</p>
                                                    <p>Cast Member 2</p>
                                                    <p>Cast Member 3</p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </React.Fragment>
                    )}

                </>
            ) : (
                skload()
            )}
        </div>
    );
};

export default detailsBanner;