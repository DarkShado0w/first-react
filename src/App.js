import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductsList from "./components/ProductsList";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  const [selectedList, setSelectedList]= useState("");
return ( 
  <div className="App">
    <button
    onClick={()=> setSelectedList("productList")}
    className={selectedList === "productList" ? "selected" : ""} 
    > 
    Products List
    </button>
    <button
    onClick={()=> setSelectedList("counter")}
    className={selectedList === "counter" ? "selected" : ""} 
    > 
    Counter
    </button>
  {selectedList === "productList" && <ProductsList />}
  {selectedList === "counter" && <Counter />}
  {selectedList === "" && <h1>Please select any list</h1>}
  <ProductsList />
  <ToastContainer />
</div>
);
}
export default App;
