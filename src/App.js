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
  const LISTS = [
    {
      name: 'productList',
      title: "Products List",
      component: <ProductsList />
    },
    {
      name: 'counter',
      title: "Counter",
      component: <Counter />
    },  
  ];
return ( 
  <div className="App">
   {LISTS.map(l=>( <button
   key={l.name}
    onClick={()=> setSelectedList(l.name)}
    className={selectedList === "l.name" ? "selected" : ""} 
    > 
    {l.title}
    </button>))}
    <button
    onClick={()=> setSelectedList("counter")}
    className={selectedList === "counter" ? "selected" : ""} 
    > 
    Counter
    </button>
  {LISTS.map((l) => selectedList === "l.name" && l.component)}
  {selectedList === "counter" && <Counter />}
  {selectedList === "" && <h1>Please select any list</h1>}
  <ProductsList />
  <ToastContainer />
</div>
);
}
export default App;
