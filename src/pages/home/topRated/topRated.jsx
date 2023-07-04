/* eslint-disable no-unused-vars */
// import './Trending.js';
import Switchtabs from '../../../components/switchTabs/switchtabs';
import { useState } from 'react';
import useFetch from '../../../hooks/Usefetch';
import Carousel from '../../../components/carousel/Carousel';
const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/top_rated`)
    console.log(data);

    const onTabchange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }
    return (
        <>

            <div className="container  py-4" >
                <div className="mb-md-5 mb-4   d-flex align-items-center justify-content-between mx-2">
                    <span className=' italic-bold bolder'>TOP RATED</span>
                    <Switchtabs data={['Movies', 'Tv Shows']} onTabchange={onTabchange} />
                </div>
                <div>
                    <Carousel endpoint={endpoint} data={data?.results} Loading={loading} />
                </div>
            </div>

        </>

    );
};


export default TopRated
