import React from "react";

const CoinBaseList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
            
                coin.symbol === "BTC" ?
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`oXBTUSD`}></span>
                    <span style={{color: 'black'}} id={`XBTUSD`}>--</span>
                    <span style={{display: 'none'}} id={`oXBTUSDb`}></span>
                    <span style={{color: 'black'}} id={`oXBTUSDb`}>--</span>
                </li> 
                : 
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`o${coin.symbol}USD`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}USD`}>--</span>
                    <span style={{display: 'none'}} id={`o${coin.symbol}USDb`}></span>
                    <span style={{color: 'black'}} id={`o${coin.symbol}USDb`}>--</span>
                </li>
                
            )}
        </>
        
    );
}

export default CoinBaseList;