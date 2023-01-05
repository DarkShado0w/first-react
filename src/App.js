import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductsList from "./components/ProductsList";
// import BillingList from "./components/BillingList";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import {Routes} from "react-router";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {GrProductHunt} from 'react-icons/gr';
import {SiCounterstrike} from 'react-icons/si';
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
  transition: all 0.5s;
  `;
  const Pagecontainer = styled.div`
  width: ${(props)=> props.width || 1000}px;
  background-color: ${(props)=> props.bgcolor || "#ffffff"};
  transition: all 0.5s; 
  `;
function App() {
  const [selectedList, setSelectedList]= useState("");
  const [expanded, setExpanded]= useState("");

  const LISTS = [
    {
      name: 'productsList',
      path: 'productsList',
      title: "Products List",
      component: <ProductsList />,
      icon: <GrProductHunt />
    },
    {
      name: 'counter',
      path: 'counter',
      title: "Counter",
      component: <Counter />,
      icon: <SiCounterstrike />
     
    },  
  
  ];
  // const Sidebar = ({ expanded,setExpanded}) =>{

 
return ( 
  <div className="App">
    <div className="container">
      
    <div className={`links ${expanded ? "": 'not-expanded'}`}>
    <div className="burger-menu">
    <div>
        <BiMenu  size={32} onClick={(e) => setExpanded(!expanded)}/>
      </div>
      </div>
   {LISTS.map(l=>( <NavLink
   key={l.name}
   to={l.path}
   className="link"
    // onClick={()=> setSelectedList(l.name)}
    // className={selectedList === "l.name" ? "selected" : ""} 
    > 
    {l.icon}
    {expanded && <span>{l.title}</span>}
  
    </NavLink>))}
    </div>
  {/* {LISTS.map((l) => selectedList === l.name && l.component)} */}
  {/* {selectedList === "" && <h1>Please select any list</h1>} */}
  <div className="page-container"></div>
  <Routes>
    <Route path="/" element={<h1>Welcome</h1>} />
    <Route path="productsList" element={<ProductsList />} />
    <Route path="counter" element={<Counter />} />
    <Route path="billingList" element={<billingList/>} />
  </Routes>
  </div>
  <ToastContainer />
  {/* {selectedList === "counter" && <Counter />} */}
  
</div>
);
};

export default App;
