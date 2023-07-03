/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



import Carousel from "../carousel/Carousel.jsx";
import useFetch from "../../hooks/Usefetch.jsx";
const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <>

            {/*         
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        /> */}
            {data && data.results.length > 0 ? (
                <Carousel
                    title="Recommendations"
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

export default Recommendation;