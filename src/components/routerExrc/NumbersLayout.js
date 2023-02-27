import { Link, Outlet, NavLink } from "react-router-dom"
import "../App.css";
import { useDebugValue, useState } from "react";

export function NumbersLayout(){
    const [isActive, setIsActive] = useState();
  
    const clickHandler = (e) =>{
      
    }
     

    return(
        <>
        <h3>Contacts 123 </h3> <NavLink onClick={(e) => clickHandler(e)} to="/contact/123">{ ({isActive}) => {return isActive ? "Active navlink" : "notActive navLink"}} 123</NavLink>
        <h3>Contacts 343 <Link to="/contact/343"> 343</Link></h3>
        <h3>Contacts 654 <Link to="/contact/654"> 654</Link></h3>
        <button><NavLink to="/about">To about from btn</NavLink></button>
        <Outlet context={{ contextName: "MyContextName"}}></Outlet>
        </>
    )
}