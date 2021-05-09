import React from 'react';

const Ingredient = (pros) => {
    const {name,amount} = pros
    return (
        <div>
            <span>{name}</span>
            <span>  {amount}</span>
            
        </div>
    );
}

export default Ingredient;
