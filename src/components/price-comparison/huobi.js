import React from "react";

const HuobiList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
                coin.symbol === "BTC" ?
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`oXBT/USD`}></span>
                    <span style={{color: 'black'}} id={`XBT/USD`}>--</span>
                    <span style={{display: 'none'}} id={`oXBT/USDb`}></span>
                    <span style={{color: 'black'}} id={`oXBT/USDb`}>--</span>
                </li> 
                : 
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`o${coin.symbol}/USD`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}/USD`}>--</span>
                    <span style={{display: 'none'}} id={`o${coin.symbol}/USDb`}></span>
                    <span style={{color: 'black'}} id={`o${coin.symbol}/USDb`}>--</span>
                </li>

            )}
        </>
        
    );
}

export default HuobiList;