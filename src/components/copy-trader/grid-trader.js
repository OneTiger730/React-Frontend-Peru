import React from "react";

const GridTraderList = ({traderList}) => {
    const goConfig = () => {
        console.log("click");
    }
    return (
        <div className="row gx-3">
            {traderList.map((trader, index) =>
                
                <div key={index} className="col-xl-6 col-lg-6 col-12 p-2">
                    <div className="card mb-0 special-card-body">
                        <img 
                        src={trader.traderimage}
                        className="card-img-top" 
                        alt="..." />
                        <div className="card-body">
                        <div className="row gx-2 pt-2">
                            <div className="col-xl-6 col-lg-6 col-6">
                            <p className="font-16 font-bold text-dark mb-2">
                                {trader.firstname} |
                                <span className="font-regular font-12"> {trader.firstname}</span>
                            </p>
                            <p className="card-text font-12 mb-0">
                                India 
                                <img src={trader.flag} alt="" className="img-fluid ps-2" />
                            </p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                            <button className="btn btn-primary font-12 border-radius-none m-1">Subscribe</button>
                            <button className="btn btn-success font-12 border-radius-none m-1" onClick={goConfig}>Configure</button>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="row gx-4 pb-2">
                            <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                                <h5 className="mb-0 font-24">2250</h5>
                                <p className="font-12 mb-0">Subscriber</p>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                                <h5 className="mb-0 font-24">7109</h5>
                                <p className="font-12 mb-0">Copies</p>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-3 border-right">
                            <div className="text-center">
                                <h5 className="mb-0 font-24">2389</h5>
                                <p className="font-12 mb-0">Signals</p>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-3">
                            <div className="text-center">
                                <h5 className="mb-0 font-24 text-green">
                                89%
                                </h5>
                                <p className="font-12 mb-0">Profit (12m)</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                	
            )}
        </div>
        
    );
}

export default GridTraderList;