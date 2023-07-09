import React from "react";
import CategoryType from "./CategoryType";
import CategoryCard from "./CategoryCard.js";
import categories from "../Arrays/categorytypes";
import "./FoodItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function FoodItems({ handleClick }) {
    return (
        <>
            <h2 className="category-name">Categories</h2>
            <hr />
            <div className="card-container">
                {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
            </div>
            {categories.map((category) => <CategoryType key={category.id} category={category} handleClick={handleClick} />)}

        </>
    );
}