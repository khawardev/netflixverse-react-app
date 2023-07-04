/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

import "./cast.scss";

import Img from "../lazyLoadImage/lazyloadImage";
import avatar from "../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (

        <div className="container castSection">
            <div className="sectionHeading my-4 italic-bold bolder text-uppercase">Top Cast</div>
            {!loading ? (
                <>
                    <div className="listItems ">
                        {data?.map((item) => {
                            let Imgurl = item?.profile_path ? item?.profile_path : avatar;
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg ">
                                        <Img src={Imgurl == avatar ? avatar : url?.profile + Imgurl} className={Imgurl === avatar ? "avatarClass" : ""} alt="" />
                                    </div>
                                    <div className="name mt-md-0 mt-3">
                                        {item.name}
                                    </div>
                                    <div className="character mb-md-4">
                                        {item.character}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </>
            ) : (
                <div className="castSkeleton">
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                </div>
            )}
        </div>
    );
};

export default Cast;