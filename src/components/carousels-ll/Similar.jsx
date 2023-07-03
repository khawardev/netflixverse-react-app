/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import Carousel from "../carousel/Carousel.jsx";
import useFetch from "../../hooks/Usefetch.jsx";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <>
            {/* {data && (
                <Carousel
                    title={title}
                    data={data?.results}
                    loading={loading}
                    endpoint={mediaType}
                />
            )} */}
            {data && data.results.length > 0 ? (
                <Carousel
                    title={title}
                    data={data?.results}
                    loading={loading}
                    endpoint={mediaType}
                />
            ) : (
                <p> </p>
            )}

        </>
    );
};

export default Similar;