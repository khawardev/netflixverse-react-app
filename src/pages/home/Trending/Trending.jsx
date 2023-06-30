/* eslint-disable no-unused-vars */
// import './Trending.js';
import './Trending.scss';
import Extraction from '../../../assets/Extraction.png';
import John from '../../../assets/John Wick.png';
import Switchtabs from '../../../components/switchTabs/Switchtabs';
const Trending = () => {

    const onTabchange = (change) => {

    }
    return (
        <>

            <div className="container bg-success " style={{ padding: '100px auto' }}>
                <div className="row"  >
                    <div className="col-12 p-0  d-flex align-items-center justify-content-between bg-danger ">
                        <span className='caouselTitle'>Trending</span>
                        <Switchtabs data={['Day', 'Week']} onTabchange={onTabchange} />
                    </div>
                </div>
            </div>







        </>

    );
};


export default Trending
