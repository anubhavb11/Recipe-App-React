import React, { useContext } from 'react';
import RecipeIngrident from './RecipeIngrident'
import {RecipeContext} from './App'
const { uuid } = require('uuidv4');

const RecipeEdit = ({recipe}) => {
   
    
    const {handelRecipeChange} = useContext(RecipeContext);
    
    function handelChange(changes){
        handelRecipeChange( recipe.id, {...recipe,...changes})
    }

    function handelIngredientChange(id,ingredient){
        const newIngredients = [...recipe.ingredients];
       console.log(id,ingredient,newIngredients);

       const indx = newIngredients.findIndex(i => i.id === id);
       newIngredients[indx] = ingredient;
       handelChange({ingredients: newIngredients})

    }

    function handelAddIngredient(){
        const newIngredients = [...recipe.ingredients];
        const  ingredient  = {
            id: uuid(),
            name: '',
            amount : ''
        }
        newIngredients.push(ingredient);
       
        handelChange({ingredients: newIngredients});
    }
   

    function handelIngredientDelete(id){
        console.log(id);
        let newIngredients = recipe.ingredients;
       
        newIngredients = newIngredients.filter( i => i.id!==id );  
       
        handelChange({ingredients: newIngredients});
    }

    
    return (
        <div className="recipe_edit">
            <div className="recipe_edit_removeButton_container">
                <button className='btn recipe_edit_removeButton'>
                     &times;  
                </button>
            </div>
            <div className="recipe_edit_details_grid">
                <label className='recipe_edit_label' htmlFor="name">Name</label>
                <input className='recipe_edit_input' 
                 type="text" name='name' id='name'
                 onInput = {e => handelChange({name: e.target.value})}
                 value={recipe.name} />

                <label className='recipe_edit_label' htmlFor="cookTime">CookTime</label>
                <input className='recipe_edit_input'
                 type="text" name='cookTime' id='cookTime'
                 onInput = {e => handelChange({cookTime: e.target.value})}
                 value={recipe.cookTime} />


                <label className='recipe_edit_label' htmlFor="Serving">Serving</label>
                <input className='recipe_edit_input'
                 type="number" name='Serving' id='Serving' 
                 onInput = {e => handelChange({servings:parseInt(e.target.value) || ' '})}
                 value={recipe.servings}/>

                <label className='recipe_edit_label' htmlFor="instructions">Instructions</label>
                <textarea className='recipe_edit_input'  
                name="instructions" id="instructions" cols="30" rows="10"
                onInput = {e => handelChange({instructions:e.target.value})}

                value = {recipe.instructions}
                ></textarea>
            </div>
            <br/>
            <label className='recipe_edit_label'> Ingredients </label>
            <div className='recipe_edit__ingredient_grid' > 
                <div>Name</div>
                <div>Amount</div>
                <div></div>

                {recipe.ingredients.map( (ingredient) => <RecipeIngrident ingredient={recipe.id,ingredient} handelIngredientChange={handelIngredientChange} handelIngredientDelete={handelIngredientDelete}/>  )}

            </div>

            <div className='recipe_edit_button__ing__container'>
                <button onClick= {() => handelAddIngredient()} className='btn recipe_edit_button btn-primary' > Add Ingredient</button>
            </div>
        </div>
    );
}

export default RecipeEdit;