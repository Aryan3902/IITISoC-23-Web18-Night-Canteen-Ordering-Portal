import React from "react";
import './CategoryType.css'
import Itemcard from "./Itemcard";
import menuItems from "../Arrays/menuitems";


export default function CategoryType({category, handleClick}){
    const {name}=category;
    function createItemCard(item){
        return (name==item.category)&&(<Itemcard key={item.id} item={item} handleClick={handleClick} />)
    }

    return (
        <div>
            <h2 className="category-name" id={name}>{name}</h2>
            <hr />
            <div className="item-container">
                {menuItems.map(createItemCard)}
            </div>
        </div>
    )
}