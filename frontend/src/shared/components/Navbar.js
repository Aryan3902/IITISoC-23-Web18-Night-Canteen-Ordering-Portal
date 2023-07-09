import React, { useState } from 'react';
import "./Navbar.css";
import navItemsData from './NavItemsData';
import { Icon } from '@iconify/react';
import Logo from '../../Images/Logo.png'

export default function Navbar() {
  const [isClicked,setClicked]=useState(false)
  const handleClick=(element)=>{
    const elements = document.getElementsByClassName("nav-bar-links");
    [...elements].forEach(element => {element.classList.remove("nav-button")});
    element.target.classList.add("nav-button");
  }
  const handleMenu=()=>{
    setClicked(!isClicked);
    document.getElementsByClassName("navitems")[0].classList.toggle("active");
  }
  return (
    <nav className="navbar-container">
    <a className='logo-name'>
        <img src={Logo} alt="logo" className="logo" />
        <p className="name">IITI NIGHT CANTEEN</p>
    </a>
       <ul className="navitems">
          {navItemsData.map((data)=><li className="nav-bar-links" key={data.id} onClick={handleClick}><a href={data.url} ></a>{data.title}</li>)}
        </ul>
        <div className="icons-container">
          <a className='icons' ><Icon icon="mdi:user" width={24} height={24}  /></a>
          <a className='icons' ><Icon icon="mdi:cart" width={24} height={24}  /></a>
          <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} />
        </div>
    </nav>
  )
} 
        
