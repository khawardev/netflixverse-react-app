/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import Carousel from "../carousel/Carousel.jsx";
import useFetch from "../../hooks/Usefetch.jsx";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;