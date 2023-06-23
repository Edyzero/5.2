import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleChange = (event, setValue) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe={name, cuisine, photo, ingredients, preparation};
    setRecipes([...recipes, newRecipe]);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");

    console.log("hi", recipes);
  }

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input required name="name" type="text" onChange={(e) => handleChange(e, setName)} value={name}></input></td>
            <td><input required name="cuisine" type="text" onChange={(e) => handleChange(e, setCuisine)} value={cuisine}></input></td>
            <td><input required name="photo" type="url" onChange={(e) => handleChange(e, setPhoto)} value={photo}></input></td>
            <td><textarea required name="ingredients" onChange={(e) => handleChange(e, setIngredients)} value={ingredients}/></td>
            <td><textarea required name="preparation" onChange={(e) => handleChange(e, setPreparation)} value={preparation}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
