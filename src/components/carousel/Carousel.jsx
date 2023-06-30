/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Carousel.scss';
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Lazyloadimage from '../lazyLoadImage/LazyloadImage'
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from '../circleRating/circleRating';
const Carousel = ({ data, Loading }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const Navigate = useNavigate();
    const navigation = (dir) => {

    }
    console.log(data);

    const skItems = () => {
        return (
            <>
                <div className="skeletonItem">
                    <div className="posterBlock skeleton"></div>
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="date skeleton"></div>
                    </div>
                </div>

            </>

        )
    }
    return (
        <div className='carousel py-md-0 py-3' ref={carouselContainer}>
            <BsFillArrowLeftCircleFill className='carouselLeftNav arrow' onClick={() => Navigate("left")} />
            <BsFillArrowRightCircleFill className='carouselRighttNav arrow' onClick={() => Navigate("right")} />
            {!Loading ? (
                <div className='carouselItems'>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        const releaseDate = new Date(item.release_date || item.first_air_date);
                        const formattedDate = releaseDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                        return (
                            <div key={item.id} className='carouselItem'>
                                <div className='posterBlock'>
                                    <Lazyloadimage src={posterUrl} alt='' />
                                    <CircleRating Rating={item.vote_average.toFixed(1)} />
                                </div>
                                <div className="textBlock mt-4 italic-bold-title">
                                    {item.title || item.name}
                                </div>

                                <div className="date release">
                                    {formattedDate}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="loadingSkeleton">
                    {skItems()}
                    {skItems()}
                    {skItems()}
                    {skItems()}
                    {skItems()}
                    {skItems()}
                    {skItems()}
                    {skItems()}
                </div>
            )}

        </div>

    )
}

export default Carousel

