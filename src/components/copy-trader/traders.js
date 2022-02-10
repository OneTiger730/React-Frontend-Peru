import React from "react";

const TraderList = ({traderList}) => {
    const goConfig = () => {
        console.log("click");
    }
    return (
        <>
            {traderList.map((trader, index) =>
                <tr key={index}>
                    <td >
                        <div className="d-flex align-baseline align-items-center">
                            <div>
                                <img
                                src={trader.traderimage}
                                alt=""
                                className="img-fluid table-pic"
                                />
                            </div>
                            <div>
                                <div className="fw-light">{trader.firstname}</div>
                                <span className="fw-bold">{trader.lastname}</span>
                            </div>
                        </div>
                    </td>
                    <td className="text-center">{trader.subscribers}</td>
                    <td className="cubscriber">{trader.membership}</td>
                    <td className="text-center">{trader.signalssent}</td>
                    <td className="text-center">
                        <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                        />
                        <span className="text-green">{trader.profit} </span>
                    </td>
                    <td className="text-center">
                        <button disabled="" className="btn btn-primary">
                        {trader.action}
                        </button>
                    </td>
                    <td className="text-center">
                        <a href="/">
                            <button
                                onClick={goConfig}
                                className="btn btn-success"
                            >
                            {trader.configure}
                        </button>
                        </a>
                    </td>
                </tr> 
            )}
        </>
        
    );
}

export default TraderList;