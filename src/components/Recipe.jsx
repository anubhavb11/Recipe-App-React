import React , {useContext} from 'react';
import IngredientsList from './ingredientsList';
import {RecipeContext} from './App'
const Recipe = (props) => {

 
   const {handleRecipeDelete,handleRecipeSelect } = useContext(RecipeContext);

    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingredients,
        
    }=props
    return (
        <div className='recipe'>
            <div className="header">
                <div className="heading">
                <h3>{name}</h3>
                </div>
               
                <div className="heading__buttons">
                    <button onClick={() =>{ 
                        console.log('de')
                        return handleRecipeSelect(id)}} className='btn btn-primary btn-blue' >Edit</button>
                    <br/>
                    <button onClick={() => handleRecipeDelete(id)} className='btn btn-red'>Delete</button>
                </div>
            </div>
            <div className="recipe__detail recipe__serving">
                <span className='recipe__detail__title'>Serving:</span>
                <span> {servings}</span> 
            </div>
            <div className="recipe__detail recipe__">
                <span className='recipe__detail__title'>Cook Time:</span>
                <span> {cookTime}</span>
            </div>
            <div className="recipe__detail recipe__">
                <span className='recipe__detail__title'>Instructions:</span>
                <div className="instruct">
                    {instructions}
                </div>
            </div>
            <div className="recipe__detail recipe__">
                <span className='recipe__detail__title'> Ingredients:</span>
                <div className="instruct">
                    <IngredientsList ingredients =  {ingredients}/>
                   
                </div>
            </div>


        </div>
       
    );
}

export default Recipe;
