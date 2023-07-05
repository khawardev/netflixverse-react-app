/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux';
import './Tags.scss';
const Tags = ({ data, paddingx, fontSize }) => {
    const { genres } = useSelector((state) => state.home)
    return (
        <>

            <div className="Tags">
                {data?.map((gen) => {
                    if (!genres[gen]?.name) return;
                    return (
                        <div className="Tag" key={gen.id} style={{
                            padding: paddingx ? `${paddingx}` : null,
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

export default Tags