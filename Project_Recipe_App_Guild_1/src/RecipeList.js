import React from "react";

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

const handelDelete = (indexDelete) => 
  setRecipes((...currentRecipes) => 
  currentRecipes.filter(({...recipe}, index) => index !== indexDelete));





  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.photo} alt={recipe.name} width="100" />
              </td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button name="delete" onClick={handelDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
