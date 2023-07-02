/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./videosSection.scss";
import PlayButton from "../playButton/playButton";
import VideoPopup from "../videoPopup/videoPopup.jsx";
import Img from "../../components/lazyLoadImage/LazyloadImage.jsx";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

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
        <div className="videosSection container">
            <div className="sectionHeading italic-bold bolder">Official Videos</div>
            {!loading ? (
                <>
                    {!!data && (
                        <>
                            <div className="videos">
                                {data?.results && data.results.map((video) => (
                                    <div key={video?.id}>
                                        <div className="videoItem "
                                            onClick={() => {
                                                setVideoId(video?.key)
                                                setShow(true)
                                            }}
                                        >
                                            <div className="videoThumbnail">
                                                <img src={`https://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`} alt="" />
                                            </div>
                                            {/* <PlayButton /> */}

                                            <div className="videoTitle  " >
                                                {video.name}
                                            </div>
                                        </div>
                                    </div>
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
    );
};

export default VideosSection;