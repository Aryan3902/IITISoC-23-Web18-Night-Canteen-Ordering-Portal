import './App.css';
import Cart from './foodItems/Components/Cart';
import React, {useState} from 'react'
import MenuPage from './foodItems/Pages/menuPage';
import Navbar from './shared/components/Navbar';
import Background from "./users/components/background";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './users/pages/home/Home';



export default function App() {
  const [cart, setCart]=useState([]);
    
  const handleClick= (item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                isPresent =true;
            }
        })
        if(isPresent){
            return;
        }
        else {  
            setCart([...cart,item]);
        }
    }

  const handleChange =(item, d)=>{
      let ind = cart.findIndex((data)=>data.id===item.id);
      setCart((prevValue)=>{
          prevValue[ind].amount +=d;
          if (prevValue[ind].amount === 0) prevValue[ind].amount = 1;
          return [...prevValue ];
  })}

  return (
    <BrowserRouter>
      <Background />
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/about" element={<div></div>}/>
        <Route path='/services' element={<div></div>} />
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<MenuPage handleClick={handleClick} /> } />
        <Route path='/cart' element={<Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} />} />
      </Routes> 
    </BrowserRouter>
    
  );
}


