import React from 'react';
import RecipeIngrident from './RecipeIngrident'
const RecipeEdit = () => {
    return (
        <div className="recipe_edit">
            <div className="recipe_edit_removeButton_container">
                <button className='btn recipe_edit_removeButton'>
                     &times;  
                </button>
            </div>
            <div className="recipe_edit_details_grid">
                <label className='recipe_edit_label' htmlFor="name">Name</label>
                <input className='recipe_edit_input' type="text" name='name' id='name' />

                <label className='recipe_edit_label' htmlFor="cookTime">cookTime</label>
                <input className='recipe_edit_input' type="text" name='cookTime' id='cookTime' />


                <label className='recipe_edit_label' htmlFor="Serving">Serving</label>
                <input className='recipe_edit_input' type="number" name='Serving' id='Serving' />

                <label className='recipe_edit_label' htmlFor="instructions">Instructions</label>
                <textarea className='recipe_edit_input'  name="instructions" id="instructions" cols="30" rows="10"></textarea>
            </div>
            <br/>
            <label className='recipe_edit_label'> Ingredients </label>
            <div className='recipe_edit__ingredient_grid' > 
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {/* Ingridents componnets */}
                <RecipeIngrident/>
                <RecipeIngrident/>

            </div>

            <div className='recipe_edit_button__ing__container'>
                <button className='btn recipe_edit_button btn-primary' > Add Ingredient</button>
            </div>
        </div>
    );
}

export default RecipeEdit;