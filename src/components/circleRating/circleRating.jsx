/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circleRating.scss";

const circleRating = ({ Rating, width, height }) => {
    return (
        <div className="circleRating" style={{ width: `${width}`, height: `${height}` }} >
            <CircularProgressbar
                value={Rating}
                maxValue={10}
                text={Rating}
                styles={buildStyles({
                    pathColor: Rating < 5 ? "red" : Rating < 7 ? "orange" : "green",
                    textColor: "black", // Change the text color here
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