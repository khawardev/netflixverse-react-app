import './skLoad.scss';
const skLoad = () => {
    return (
        <>
            <div style={{margin:'135px auto'}}>
                <div className="detailsBannerSkeleton container ">
                    <div className="left skeleton"></div>
                    <div className="right px-2">
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default skLoad