import React, { useState,useEffect } from 'react';
import "./navbarAdmin.css";
import navItemsData from './NavAdminItemsData';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  const [isClicked,setClicked]=useState(false)
//   const handleClick=(element)=>{
//     const elements = document.getElementsByClassName("nav-bar-links");
//     [...elements].forEach(element => {element.classList.remove("nav-button")});
//     element.target.classList.add("nav-button");
//   }
  const handleMenu=()=>{
    setClicked(!isClicked);
    document.getElementsByClassName("navitems")[0].classList.toggle("active");
  }
  const changeNavigationOnClick=(event)=>{
    let a=event.target;
    console.log(a.classList);
    a.classList.toggle("navbar-buttons-without-click");
    a.classList.toggle("navbar-buttons-with-click");
  }
  // const knowLocation=()=>{
  //   let b=useLocation;
  //   return b
  // }
  // const colorNavButtons = () =>{
  //   let a = Array.from(document.getElementsByClassName("navbar-buttons"));
  //   console.log(a[0].classList);
  //   let b=a[0].closest(".navbarLinks");
  //   console.log(b);
  //   let c=b.getAttribute("href")
  //   console.log(c,typeof c)
  //   for(let i=0;i<a.length;i++){
  //     if(a[i].closest(".navbarLinks"))
  //   }
  // }
  // useEffect(()=>{
  //   colorNavButtons();
  // },[])
  return (
    <div className='navbar-div'>
        <nav className="navbar-container sticky">
            <Link className='logo-name' to="/">
                <img src="https://shriramsetu.org/img/11-(2).png" alt="logo" className="logo" />
                <p className="name">IITI NIGHT CANTEEN</p>
            </Link>
        <ul className="navitems">
            {navItemsData.map((nav_items)=>{return <li key={nav_items.id}><Link className='navbarLinks' to={nav_items.to}><button className="navbar-buttons navbar-buttons-without-click" onClick={changeNavigationOnClick}>{nav_items.title}</button></Link></li>})}
            </ul>
            <div className="icons-container">
            <Link className='icons' to="/login"><Icon icon="mdi:user" width={24} height={24}  /></Link>
            <Link className='icons' to="/cart"><Icon icon="mdi:cart" width={24} height={24}  /></Link>
            <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} />
            </div>
        </nav>
    </div>
  )
}
