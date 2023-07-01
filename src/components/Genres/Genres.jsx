/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import './Genres.scss';
const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home)
    // console.log("Genres id Data from carousel ", data);
    // console.log("Genres id Data from Store ", genres);

    return (
        <>



            <div className="genres">
                {data?.map((gen) => {
                    if (!genres[gen]?.name) return;
                    return (
                        <div className="genre" key={gen.ad}>
                            {genres[gen]?.name}
                        </div>
                    );
                })}
            </div>





        </>
    )
}

export default Genres