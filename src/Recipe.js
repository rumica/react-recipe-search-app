import React from "react";
import './App.css';

const Recipe = ( {title, image, ingredients} ) => {
    return(
            <div className="recipe-info">
                <h3>{title}</h3>
                <img src={image} alt="" />
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
    )
}

export default Recipe;