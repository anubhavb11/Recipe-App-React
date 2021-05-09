import '../css/App.css';
import RecipeList from './RecipeList';

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
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
