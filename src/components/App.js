import '../css/App.css';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import React, {  useState , useEffect } from 'react'
const { uuid } = require('uuidv4');


export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
function App() {
    const [selectRecipeId, setSelectRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectRecipeId);



  useEffect(() =>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
   
    if(recipeJSON!= null){
      setRecipes(JSON.parse(recipeJSON))
    }
  },[])

  useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(recipes)),[recipes] );




 
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handelRecipeChange
  }


  function handleRecipeSelect(id){
    setSelectRecipeId(id);
  }

  function handelRecipeChange(id,recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index]=recipe
    setRecipes(newRecipes);
  }

  function handleRecipeAdd(){

    const newRecipe = {
      id: uuid(),
      name: ' ',
      servings: null,
      cookTime: ' ',
      instructions: ' ',
      ingredients: [
        {
          id: uuid(),
          name: ' ',
          amount : ' '
        }
      ]
    };
    handleRecipeSelect(newRecipe.id);

  setRecipes([...recipes,newRecipe]);
}

function handleRecipeDelete(id){
  setRecipes(recipes.filter(recipe => recipe.id !== id))
}
 

  return (
    <RecipeContext.Provider  value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}

    </RecipeContext.Provider>
   
  );



}



const sampleRecipes = [
  {
    id:1,
    name: "Sahi Panner",
    servings: 2,
    cookTime: '1:45',
    instructions: '1 prepare sahi panner \n2. put it in your plate\n3. eat it and Enjoy.',
    ingredients : [
      {  
        id: 1,
        name: 'Panner',
        amount: '1kg'
      },
      {
        id: 2,
        name: 'Onion',
        amount: '200gm'
      }
    ]
  },
  {
    id: 2,
    name: 'Pav Bhaji',
    servings: 2,
    cookTime: '2:10',
    instructions: '1 prepare pav bhaji \n2. put it in your plate\n3. eat it and Enjoy.',
    ingredients : [
      {
        id: 1,
        name: 'pav',
        amount: ' 5 pcs'
      },
      {
        id: 2,
        name: 'Onion',
        amount: ' 200gm'
      }
    ]
  }
]

export default App;
