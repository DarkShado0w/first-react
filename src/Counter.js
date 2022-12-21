
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0); 
  const [show,setShow ]=useState(true);
  const handleClickPlus = (e) => setCount(count + 1);
  const handleClickMinus = (e) => count > 1 ? setCount(count - 1):void 0
  // state to be used later
  return (
    <div 
    style ={{
        display:"flex",
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
    }}>
        {show && (
            <BsPlusCircle color={"green"} size={32} onClick={handleClickPlus} />
        )}
      <h1 role="button" onClick={(e) => setShow(!show)}> 
      {count}
      </h1>
      {show&&(
      <BiMinusCircle color={count<2?"grey":"red"} size={32}  onClick={handleClickMinus} />
      )}
    </div>
  );
};

export default Counter;