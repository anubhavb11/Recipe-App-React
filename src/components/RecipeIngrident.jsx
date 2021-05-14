import React from 'react';

const RecipeIngrident = ({ingredient,handelIngredientChange,handelIngredientDelete}) => {
   
    function handelIngredient(change){
        handelIngredientChange(ingredient.id,{...ingredient,...change})
    }

   
    return (
        

        <>
            <input 
            onInput = {e => handelIngredient({name:e.target.value})}
            value={ingredient.name} 
            type="text" />
                
            <input 
            onInput = {e => handelIngredient({amount:e.target.value})}

            value={ingredient.amount} type="text" />
            <button
            onClick={()=> handelIngredientDelete(ingredient.id)}
             className='btn-red'>&times;</button>
        </>
    );
}

export default RecipeIngrident;
