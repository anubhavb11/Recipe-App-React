import React from 'react';
import IngredientsList from './ingredientsList';
const Recipe = (props) => {
    const {
        name,
        servings,
        cookTime,
        instructions,
        ingredients
    }=props
    return (
        <div>
            <div className="header">
                <h3>{name}</h3>
                <div className="heading">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="1-row">
                <span>Serving:</span>
                <span>{servings}</span>
            </div>
            <div className="1-row">
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div className="1-row">
                <span>Instructions:</span>
                <div className="instruct">
                    {instructions}
                </div>
            </div>
            <div className="1-row">
                <span>Ingredients:</span>
                <div className="instruct">
                    <IngredientsList ingredients =  {ingredients}/>
                   
                </div>
            </div>


        </div>
       
    );
}

export default Recipe;
