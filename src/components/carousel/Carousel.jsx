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
import CircleRating from '../circleRating/circleRating.jsx';
// import Genres from '../genres/genres';

import Tags from '../tags/Tags';
const Carousel = ({ title, data, Loading, endpoint }) => {

    console.log("Endpoint from top rated and popular", endpoint);

    const { url } = useSelector((state) => state.home);
    const Navigate = useNavigate();
    const carouselContainer = useRef();
    const navigation = (dir) => {
        const container = carouselContainer.current;
        const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
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
    const skPoster = () => {
        return (
            <>
                <div className="skeletonItem" >
                    <div className="posterBlock skeleton" style={{ borderRadius: '12px' }}></div>
                </div>

            </>

        )
    }
    return (
        <div className='container carousel  ' >

            {title && (
                <div className=" sectionHeading italic-bold bolder mt-4 text-uppercase">{title}</div>
            )}
            <BsFillArrowLeftCircleFill className='carouselLeftNav arrow' onClick={() => navigation("left")} />
            <BsFillArrowRightCircleFill className='carouselRighttNav arrow' onClick={() => navigation("right")} />
            {!Loading ? (
                <div className='carouselItems' ref={carouselContainer}>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        const releaseDate = new Date(item.release_date || item.first_air_date);
                        const formattedDate = releaseDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                        return (
                            <div key={item.id} className='carouselItem' onClick={() => Navigate(`/${endpoint || item.media_type}/${item.id}`)}>

                                <div className='posterBlock'>
                                    <Lazyloadimage className='text-white' src={posterUrl} alt='' />
                                    <CircleRating width={'45px'} height={'45px'} Rating={item.vote_average.toFixed(1)} />
                                    <Tags data={item.genre_ids.slice(0, 2)} />
                                </div>


                                <div className='textBlock mt-4 italic-bold-title'>
                                    {item.title || item.name}
                                </div>
                                <div className='date release'>{formattedDate}</div>
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

