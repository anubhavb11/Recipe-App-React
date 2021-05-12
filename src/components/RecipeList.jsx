import React , {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App'
const RecipeList = ({recipes}) => { 
    console.log(RecipeContext);
    const {handleRecipeAdd} = useContext(RecipeContext);
    console.log(handleRecipeAdd)
    return (
        <div className='recipe-list'>
        <div>
           { recipes.map( recipe =>{
               return ( 
               <Recipe 
               key={recipe.id}  
               {...recipe} 
               />
            )
            })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
            <button 
            onClick={handleRecipeAdd} 
            className='btn btn-primary' 
            >Add Recipe
            </button>
        </div>
        
        </div>
    );
}

export default RecipeList;
