import React, {useState} from "react";

function Recipe(props){
  
  const[editRecipe,setEditRecipe] = useState({
    food: props.food,
    ingredients: props.ingredients,
    steps: props.steps
  });

  function handleChange(event){
    const {name, value}  = event.target;
  
    setEditRecipe((prevRecipe) => {
      return {
        ...prevRecipe,
        [name]: value,
      }
    });
  }

  function handleDelete(){
    props.onDelete(props.id);
  }
  
  function handleEdit(){
    props.onEdit(props.id, editRecipe);
  }
  
  return(
    <div className="card">
      
      <input
        type="text"
        name="food"
        onChange={handleChange}
        value={editRecipe.food}
        required
      />
      
      <textarea
        name="ingredients"
        rows="10"
        onChange={handleChange}
        value={editRecipe.ingredients}
        required
      ></textarea>
      
      <textarea
        name="steps"
        rows="10"
        onChange={handleChange}
        value={editRecipe.steps}
        required
      ></textarea>   
      
      <div className="cardbuttons">
        <button className="modify" onClick={handleDelete}>Delete</button>
        <button className="modify" onClick={handleEdit}>Edit</button>
      </div>
    
    </div>  
  );

}

export default Recipe;