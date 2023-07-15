import React,{useEffect} from "react";
import './menuPage.css'
import FoodItems from "../../components/menu_page_components/FoodItems";
import menuItems from "../../Arrays/menuitems";


export default function MenuPage({handleClick},cart){

     const searchOnClick =()=>{
        let a=document.getElementById("search-box");
        let c=a.value
        for(let menuItem of menuItems){
            
            if(c.toUpperCase()===menuItem.category || c.toUpperCase()===menuItem.name){
                try{
                    let element = document.getElementById(menuItem.category)
                    element.scrollIntoView({behavior:"smooth"});
                }catch(error){
                   
                }
                
                break
            }
        }
    }

    const topOnClick=()=>{
        let element = document.getElementById("search-box")
        element.scrollIntoView({behavior:"smooth"});
    }
    useEffect(()=>{
        
        document.addEventListener("keypress",(a)=>{
            if (a.key==="Enter"){
                let a = document.getElementById("search-box")
                let c=a.value
                if(c===null){}
                else{
                for(let menuItem of menuItems){
                    if(c.toUpperCase()===menuItem.category || c.toUpperCase()===menuItem.name){
                        try{
                            let element = document.getElementById(c.toUpperCase())
                            element.scrollIntoView({behavior:"smooth"});
                        }catch(error){
                   
                        }
                
                        break
                    }
                }}
            }
        })
    },[])

    return (
        <>
            <div style={{marginTop:"100px",marginLeft:"40px",width:"500px"}}>
                <input placeholder="Search category or item" id="search-box"/>
                <button onClick={searchOnClick}>Search</button>
            </div>
            <div className="box">
                <FoodItems handleClick={handleClick} />
            </div>
            <button className="take-me-up-arrow" onClick={topOnClick}>&uarr;</button>
        </>
        
    );
}