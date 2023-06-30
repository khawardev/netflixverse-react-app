/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circleRating.scss";

const circleRating = ({ Rating }) => {
    return (
        <div className="circleRating" style={{ width: '45px', height: '45px' }} >
            <CircularProgressbar
                value={Rating}
                maxValue={10}
                text={Rating}
                styles={buildStyles({
                    pathColor: Rating < 5 ? "red" : Rating < 7 ? "orange" : "green",
                    textColor: "#000", // Change the text color here
                    textSize: "32px", // Change the text size here
                    path: {
                        strokeWidth: "1px", // Decrease the stroke width to decrease the size
                    },
                })}
            />

        </div>
    );
}

export default circleRating