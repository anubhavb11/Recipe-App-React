import React from 'react';
import Ingredient from './ingredient';

const IngredientsList = ({ingredients}) => {
    // console.log(props);

    const ingredientElements = ingredients.map( ingredient => {
        return <Ingredient key = {ingredient.id} {...ingredient}/>
    } )

    return (
        <div>
            {ingredientElements}
        </div>
    );
}

export default IngredientsList;
