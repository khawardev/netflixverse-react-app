/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './detailsBanner.scss';
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import useFetch from "../../../hooks/Usefetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/circleRating";
import Img from "../../../components/lazyLoadImage/LazyloadImage.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import PlayButton from '../../../components/playButton/playButton';
import VideoPopup from '../../../components/videoPopup/videoPopup';



const DetailsBanner = ({ video, crew }) => {


    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const [filteredVideoId, setFilteredVideoId] = useState(null);
    useEffect(() => {
        const sortedVideos = video.sort((a, b) => {
            const dateA = new Date(a.published_at);
            const dateB = new Date(b.published_at);
            return dateA.getMonth() - dateB.getMonth();
        });

        const firstVideo = sortedVideos[0];
        if (firstVideo) {
            setFilteredVideoId(firstVideo.key);
        } else {
            setFilteredVideoId(null);
        }
    }, [video]);

    console.log("NEW ID IS ", filteredVideoId);


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
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    // if (skloads) {
    //     return (
    //         <div style={{ margin: '135px auto' }}>
    //             <div className="container detailsBannerSkeleton">
    //                 <div className="left skeleton"></div>
    //                 <div className="right px-2">
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                     <div className="row skeleton"></div>
    //                 </div>
    //             </div>
    //         </div>

    //     );
    // }
    const releaseDate = new Date(data?.release_date || data?.first_air_date);
    const formattedDate = releaseDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const runtime = data?.runtime || data?.episode_run_time || 0;
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;


    const images = data?.seasons?.map((d) => (d?.poster_path) ? url.poster + d.poster_path : PosterFallback) || [];


    return (
        <div className="detailsBanner container">
            <>
                {!!data && (
                    <React.Fragment>
                        <div className="backdrop-img">
                            <img src={url.poster + data.backdrop_path} className='banner-image ' />
                        </div>
                        <div className="opacity-layer"></div>
                        <div className="container-md container-fluid px-0">
                            <div className="row italic-bold">
                                <div className="col-md-4 col-12 py-md-0 py-3">
                                    <div className="poster">
                                        <Img src={(url.poster && data.poster_path) ? url.poster + data.poster_path : PosterFallback} />
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

                                        <div className='d-flex pt-3 pb-4'>
                                            <div className='button-background-move ' onClick={() => { setShow(true), setVideoId(filteredVideoId) }} style={{ padding: '0rem 1rem' }}>
                                                <div className='playBut d-flex align-items-center'>
                                                    <div style={{ zIndex: '1' }}>
                                                        <PlayButton width={"40px"} height={"40px"} />
                                                    </div>
                                                    <span className="button-text" style={{ fontSize: '18px', fontWeight: 'bold' }} >Watch Trailer</span>
                                                    <div className="fill-container"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-md-5 gap-4' >

                                            {data?.status && (
                                                <>
                                                    <div className='d-md-flex gap-3 '>
                                                        <p className='bolder'>Status: </p>
                                                        <p className='details-tagline ' style={{ fontWeight: '500', fontSize: '18px' }}>{data.status} </p>
                                                    </div>
                                                </>
                                            )}

                                            {data?.release_date && (
                                                <>
                                                    <div className='d-md-flex gap-3 '>
                                                        <p className='bolder '>Release date: </p>
                                                        <p className='details-tagline ' style={{ fontWeight: '500', fontSize: '18px' }}>{formattedDate} </p>
                                                    </div>
                                                </>
                                            )}
                                            {data?.runtime && (
                                                <>
                                                    <div className='d-md-flex gap-3'>
                                                        <p className='bolder'>Runtime: </p>
                                                        <p className='details-tagline' style={{ fontWeight: '500', fontSize: '18px' }}>{`${hours}h ${minutes}m`}</p>
                                                    </div>
                                                </>


                                            )}
                                            {data?.number_of_seasons && (
                                                <>
                                                    <div className='d-md-flex gap-3'>
                                                        <p className='bolder'>Number of Season: </p>
                                                        <p className='details-tagline' style={{ fontWeight: '500', fontSize: '18px' }}>{data?.number_of_seasons}</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <hr className='mb-4' />
                                        <div className='directors ' >

                                            {director?.length > 0 && (
                                                <>

                                                    <div className='d-flex gap-3 '>
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
                                                    <hr className='mb-4' />
                                                </>
                                            )}

                                        </div>
                                        <div className='writer' >
                                            {writer?.length > 0 && (

                                                <>

                                                    <div className='d-flex gap-3'>

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
                                                    <hr className='mb-4' />
                                                </>

                                            )}
                                        </div>
                                        <div className='created_by ' >
                                            {data?.created_by && (
                                                <>
                                                    <div className='d-flex gap-3 '>
                                                        <p className='bolder'>Created by: </p>
                                                        <p className='details-tagline' style={{ fontWeight: '500', fontSize: '18px' }}>
                                                            {data?.created_by.map((d, index) => (
                                                                <span key={index}>
                                                                    {d.name}
                                                                    {index !== data?.created_by.length - 1 && ', '}
                                                                </span>
                                                            ))}
                                                        </p>
                                                    </div>
                                                    <hr className='mb-4' />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {images.length > 1 && (
                                    <div className="container-fluid py-md-5 py-2">
                                        <div className="row p-0">
                                            {images.map((image, index) => (
                                                <div className="col-md-2 col-6 p-l-0 pr-0 my-2" key={index}>
                                                    {image && (
                                                        <>
                                                            <img src={image} style={{ width: '100%', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} />
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                        <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />

                    </React.Fragment>
                )}

            </>
        </div>
    );
};

export default DetailsBanner;