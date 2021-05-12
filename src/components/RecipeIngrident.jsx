import React from 'react';

const RecipeIngrident = ({ingredient}) => {
    console.log(ingredient);
    return (

        <>
            <input value={ingredient.name} type="text" />
            <input value={ingredient.amount} type="text" />
            <button className='btn-red'>&times;</button>
        </>
    );
}

export default RecipeIngrident;
