import React, { useState, useEffect } from "react"; 
import Recipe from "./components/Recipe";
import CreateRecipe from "./components/CreateRecipe";
import './App.css';

function App() {
  
  const localData = localStorage.getItem('recipes') === null ? [] : JSON.parse(localStorage.getItem('recipes'));
  
  const [recipes,setRecipes] = useState(localData);  
  
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  },[recipes]);
  
  function addRecipe(newRecipe){
    setRecipes(prevRecipes => {
      return [...prevRecipes, newRecipe];
    });
  }

  function deleteRecipe(id){
    setRecipes(prevRecipes => {
      return prevRecipes.filter((recipe,index) => {
        return index !== id;
      });
    });
  }
  
  function editRecipe(id, updatedRecipe){
    setRecipes(recipes.map((recipe) => recipe.id === id ? updatedRecipe : recipe));
  }
  
  return (
    <div>
      <CreateRecipe onAdd={addRecipe}/>
      <div className="recipes">
        {recipes.map((recipe,index) => {
          return (
            <Recipe 
              key={index} 
              id={index} 
              food={recipe.food} 
              ingredients={recipe.ingredients} 
              steps={recipe.steps}
              onDelete={deleteRecipe}
              onEdit={editRecipe}
            />
          );
        })}  
      </div>
    </div>
  );

}

export default App;
