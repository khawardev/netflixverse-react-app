import ReactPlayer from "react-player/youtube";
import "./videoPopup.scss";
import { BiX } from "react-icons/bi";
const videoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
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
                    full

                />
            </div>
        </div>
    );
};

export default videoPopup;