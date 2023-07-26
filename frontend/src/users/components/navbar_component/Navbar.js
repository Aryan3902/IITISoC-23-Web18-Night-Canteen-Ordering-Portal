import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { Icon } from '@iconify/react';
import Logo from '../../../Images/Logo.png'
import userNavbar from '../../Arrays/userNavbar';
import { AuthContext } from '../../../context/auth-context';

export default function Navbar({size, navbar}) {
  const [isClicked,setClicked]=useState(false);
  const dat=useContext(AuthContext);


  const removeButton=()=>{
    const elements = document.getElementsByClassName("nav-bar-links");
    [...elements].forEach(element => {element.classList.remove("nav-button")});
  }
  const handleClick=(element)=>{
    removeButton();
    element.target.classList.add("nav-button");
  }
  
  const handleMenu=()=>{
    setTimeout( ()=>{setClicked(!isClicked);
    document.getElementsByClassName("navbar-container")[0].classList.toggle("active");
    document.getElementsByClassName("navitems")[0].classList.toggle("active");} 
    ,300);
  }
  var data=userNavbar;

//  const navbarDecider= ()=>{
//   if(navbar==="null") 

//  }
let cont;
  if(dat.name===null){
    cont="HELLO"
  }else{
    cont=`${dat.name}`
  }

  return (
    <nav className="navbar-container">
    <Link to="/"  className='logo-name' onClick={()=>{removeButton(); document.getElementsByClassName("nav-bar-links")[0].classList.add("nav-button")}} >
        <img src={Logo} alt="logo" className="logo" />
        <p className="name">IITI NIGHT CANTEEN</p>
    </Link>
       <ul className="navitems">
          {data.map((item)=><li key={item.id} ><Link className="nav-bar-links"  onClick={handleClick} to={item.url} >{item.title}</Link></li>)}
        </ul>
        <div className="icons-container">
          <Link to="/" className='icons' ><Icon icon="mdi:user" width={24} height={24}  /></Link>
          <Link to="/user/cart" className='icons' >
            <Icon icon="mdi:cart" width={24} height={24}  />
            {size>0&&<div className='circle-cart'>{size}</div>}
            </Link>
          <Icon onClick={handleMenu} className='hamburger-menu' icon={isClicked ?"maki:cross":"ion:menu"} width={24} height={24} />
          {cont}
        </div>
    </nav>
  )
}