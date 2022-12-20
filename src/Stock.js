import React from "react";

const Stock = (props) => {
    console.log(props);
    return <div>
       <h1>{props.securityName}</h1>
       <h2>{props.symbol}</h2>
       <h2>{props.lastTradePrice}</h2>
        </div>;
};
export default Stock;