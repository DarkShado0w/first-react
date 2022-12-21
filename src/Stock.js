import React from "react";
import {BsTrash} from 'react-icons/bs';
const Stock = ({
    securityName,
     symbol ,
     lastTradePrice,
      ...rest }) => {
  console.log(rest,"in stock");
    return (
        <div 
        style={{
            display:"flex",
            justifyContent:"space-between",
            width:400,
            margin:"20px 0",

        }}
        > 
          <span>{securityName}</span>
          <span>{symbol}</span>
            <div><span>{lastTradedPrice}</span>
            <BsTrash onClick={() => onRemove(rest.securityId)} />
            </div>
        </div>
    );
};
   
export default Stock;