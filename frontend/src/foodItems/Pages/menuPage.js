import React from "react";
import './menuPage.css'

import FoodItems from "../Components/FoodItems";



export default function MenuPage({handleClick}){

    return (
        // <div className="box">
        //     <div className="first-column">
        //        <FoodItems handleClick={handleClick}/>
        //     </div>
        //     <div className="second-column">
        //     </div>
        //     <div className="third-column">
        //         
        //     </div>
        // </div>
        <div className="box">
            <FoodItems handleClick={handleClick} />
        </div>
    );
}