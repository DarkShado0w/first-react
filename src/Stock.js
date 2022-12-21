import React from "react";

const Stock = ({securityName, symbol ,lastTradePrice}) => {
    // console.log(props);
    return (
        <div>
            <h1>{securityName}</h1>
            <h2>{symbol}</h2>
            <h2>{lastTradePrice}</h2>
        </div>
    )
}
   
export default Stock;