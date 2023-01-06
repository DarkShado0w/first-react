import React, {useState} from "react";
import ProductsList from "./components/ProductsList";
import Counter from "./Counter";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {GrProductHunt} from "react-icons/gr";
import {SiCounterStrike} from "react-icons/si";
import styled from "styled component";
const Sidebar = ()=>{
    <LinksContainer>
    <div className={`links ${expanded ? "": 'not-expanded'}`}>
    <div className="burger-menu"> </div>
    <div>
        <BiMenu  size={32} onClick={(e) => setExpanded(!expanded)}/>
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
    </LinksContainer>
}
export default Sidebar;

