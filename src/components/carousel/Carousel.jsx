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

const Carousel = ({ data, loading }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const Navigate = useNavigate();
    const navigation = (dir) => {

    }
    console.log(data);
    return (
        <div className='carousel py-md-0 py-3' ref={carouselContainer}>
            <BsFillArrowLeftCircleFill className='carouselLeftNav arrow' onClick={() => Navigate("left")} />
            <BsFillArrowRightCircleFill className='carouselRighttNav arrow' onClick={() => Navigate("right")} />
            {!loading ? (
                <div className='carouselItems '>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        return (

                            <div key={item.id} className='carouselItem'>
                                <div className='posterBlock'>
                                    <Lazyloadimage src={posterUrl} alt='' />
                                </div>
                                <div className="textBlock mt-3 italic-bold-title">
                                    {item.title || item.name}
                                </div>
                                {item.release_Date && (
                                    <div className="date">
                                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                                    </div>
                                )}
                            </div>
                        );
                    })}


                </div>
            ) : (
                <span>loading...</span>
            )}
        </div>

    )
}

export default Carousel

