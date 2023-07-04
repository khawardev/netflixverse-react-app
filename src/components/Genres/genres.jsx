/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import './genres.scss';
const Genres = ({ data, paddingx, fontSize }) => {
    const { genres } = useSelector((state) => state.home)
    // console.log("Genres id Data from carousel ", data);
    // console.log("Genres id Data from Store ", genres);

    return (
        <>

            <div className="genres">
                {data?.map((gen) => {
                    if (!genres[gen]?.name) return;
                    return (
                        <div className="genre" key={gen.id} style={{
                            padding: paddingx ? `2px 20px` : null,
                            fontSize: fontSize ? `${fontSize}` : null
                        }}
                        >
                            {genres[gen]?.name}
                        </div>
                    );
                })}
            </div>

        </>
    )
}

export default Genres