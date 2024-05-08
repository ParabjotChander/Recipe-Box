import React, { useState } from "react";

function CreateRecipe(props){
  
  const[recipe,setRecipe] = useState({
    food: "",
    ingredients: "",
    steps: ""
  });

  function handleChange(event){
    const {name, value}  = event.target;
  
    setRecipe((prevRecipe) => {
      return {
        ...prevRecipe,
        [name]: value,
      }
    });
  }

  function handleClick(event){
    props.onAdd(recipe);

    setRecipe({
      food: "",
      ingredients: "",
      steps: "",
    });
    
    event.preventDefault();
  }
  
  return (
    
    <div className="container">
      
      <h1>Recipe Box</h1>  
      
      <input
        type="text"
        name="food"
        placeholder="Food Name!"
        id="food"
        onChange={handleChange}
        value={recipe.food}
        required
      />
      
      <textarea
        id="food_i"
        name="ingredients"
        rows="10"
        placeholder="Enter the Ingredients!"
        onChange={handleChange}
        value={recipe.ingredients}
        required
      ></textarea>
      
      <textarea
        name="steps"
        id="food_s"
        rows="10"
        placeholder="Enter the Steps!"
        onChange={handleChange}
        value={recipe.steps}
        required
      ></textarea>
      
      <button
        onClick={handleClick}
        className="addRecipe"
      >
        Add Recipe
      </button>
    
    </div>
  );

}

export default CreateRecipe;