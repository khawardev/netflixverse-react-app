/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./videosSection.scss";
import PlayButton from "../playButton/PlayButton";
import VideoPopup from "../videoPopup/VideoPopup.jsx";
import Img from "../lazyLoadImage/LazyloadImage.jsx";
import { useRef } from "react";
import PosterFallback from "../../assets/no-poster.png";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const [thumbnail, setthumbnail] = useState('');
    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };


    return (

        <>

            {data && data.results.length > 0 ? (
                <>

                    <div className="videosSection container mt-4">
                        <div className="sectionHeading italic-bold bolder text-uppercase ">Official Videos</div>
                        {!loading ? (
                            <>
                                {!!data && (
                                    <>

                                        <div className="videos">

                                            {data?.results && data.results.map((video) => (video?.key && (

                                                <div key={video.id}>

                                                    <div className="videoItem" onClick={() => {
                                                        setVideoId(video.key);
                                                        setShow(true);
                                                    }}>
                                                        <div className="videoThumbnail position-relative playBut">
                                                            <img

                                                                src={`https://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`}

                                                                alt=""
                                                                onLoad={(e) => {
                                                                    const img = e.target;
                                                                    if (img.naturalWidth >= 1280 && img.naturalHeight >= 720) {
                                                                        img.style.display = 'block';
                                                                    } else {
                                                                        img.style.display = 'none';
                                                                        video.name = ' ';
                                                                    }
                                                                }}
                                                            />
                                                            {video?.name && (
                                                                <div className={`videoTitle ${video.name ? '' : 'hidden'}`}>
                                                                    {video.name}
                                                                </div>
                                                            )}
                                                            <div className="video-section-playButton " >
                                                                <PlayButton width={"90px"} height={"90px"} />
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            )
                                            ))}




                                        </div>
                                    </>
                                )}

                            </>
                        ) : (
                            <div className="videoSkeleton">
                                {loadingSkeleton()}
                                {loadingSkeleton()}
                                {loadingSkeleton()}
                                {loadingSkeleton()}
                            </div>
                        )}
                        <VideoPopup
                            show={show}
                            setShow={setShow}
                            videoId={videoId}
                            setVideoId={setVideoId}
                        />
                    </div>




                </>
            ) : (
                <p> </p>
            )}


        </>




    );
};

export default VideosSection;