/* eslint-disable no-unused-vars */
// import './Trending.js';
import './Trending.scss';
import Extraction from '../../../assets/Extraction.png';
import Switchtabs from '../../../components/switchTabs/Switchtabs';
import { useState } from 'react';
import useFetch from '../../../hooks/Usefetch';
import Carousel from '../../../components/carousel/Carousel';
const Trending = () => {

    const [endpoint, setEndpoint] = useState("day")
    const { data, loading } = useFetch(`/trending/all/${endpoint}`)
    console.log("Trending data: ", data);



    const onTabchange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    }
    return (
        <>

            <div className="container  py-4" >
                <div className="mb-md-5 mb-4   d-flex align-items-center justify-content-between mx-2">
                    <span className=' italic-bold bolder'>TRENDING</span>
                    <Switchtabs data={['Day', 'Week']} onTabchange={onTabchange} />
                </div>
                <div>
                    <Carousel data={data?.results} Loading={loading} />
                </div>
            </div>







        </>

    );
};


export default Trending
