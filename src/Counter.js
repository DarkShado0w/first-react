
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0); 
  const handleClickPlus = (e) => setCount(count + 1);
  const handleClickMinus = (e) => setCount(count - 1);
  // state to be used later
  return (
    <div>
      <BsPlusCircle color={"green"} size={32} onClick={handleClickPlus} />
      <h1>{count}</h1>
      <BiMinusCircle color={"red"} size={32}  onClick={handleClickMinus} />
    </div>
  );
};

export default Counter;