/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import ReactPlayer from "react-player/youtube";
import "./videoPopup.scss";
import { BiX } from "react-icons/bi";
import { useRef } from 'react';
const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    const playerRef = useRef(null);

    const handlePlayerReady = () => {
        const player = playerRef.current.getInternalPlayer();
        player.addEventListener('loadedmetadata', () => {
            player.requestFullscreen();
        });
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    <BiX style={{ fontSize: '30px' }} />
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                    onReady={handlePlayerReady}

                />
            </div>
        </div>
    );
};

export default VideoPopup;