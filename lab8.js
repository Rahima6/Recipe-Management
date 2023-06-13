// Initialize recipe data array
let recipes = [];

// Function to add a new recipe
function addRecipe(event) {
  event.preventDefault();

  // Get form values
  const titleInput = document.getElementById("title");
  const ingredientsInput = document.getElementById("ingredients");
  const instructionsInput = document.getElementById("instructions");
  const imageInput = document.getElementById("image");

  // Create a new recipe object
  const newRecipe = {
    title: titleInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value,
    image: imageInput.value,
  };

  // Add the new recipe to the data array
  recipes.push(newRecipe);

  // Reset the form inputs
  titleInput.value = "";
  ingredientsInput.value = "";
  instructionsInput.value = "";
  imageInput.value = "";

  // Update the displayed recipe list
  displayRecipes();
}

// Function to display the list of recipes
function displayRecipes() {
  const recipesList = document.getElementById("recipes");

  // Clear the existing list
  recipesList.innerHTML = "";

  // Loop through the recipes array and create list items for each recipe
  recipes.forEach((recipe, index) => {
    const listItem = document.createElement("li");
    const title = document.createElement("h3");
    const ingredients = document.createElement("p");
    const image = document.createElement("img");
    const instructions = document.createElement("p");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    title.textContent = recipe.title;
    ingredients.textContent = "Ingredients: " + recipe.ingredients;
    image.src = recipe.image;
    instructions.textContent = "Instructions: " + recipe.instructions;
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";

    // Attach event listeners for editing and deleting a recipe
    editButton.addEventListener("click", () => editRecipe(index));
    deleteButton.addEventListener("click", () => deleteRecipe(index));

    listItem.appendChild(title);
    listItem.appendChild(ingredients);
    listItem.appendChild(image);
    listItem.appendChild(instructions);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    recipesList.appendChild(listItem);
  });
}

// Function to edit a recipe
function editRecipe(index) {
  // Get the recipe object at the specified index
  const recipe = recipes[index];

  // Populate the form inputs with the recipe data
  const titleInput = document.getElementById("title");
  const ingredientsInput = document.getElementById("ingredients");
  const instructionsInput = document.getElementById("instructions");
  const imageInput = document.getElementById("image");

  titleInput.value = recipe.title;
  ingredientsInput.value = recipe.ingredients;
  instructionsInput.value = recipe.instructions;
  imageInput.value = recipe.image;

  // Remove the recipe from the data array
  recipes.splice(index, 1);

  // Update the displayed recipe list
  displayRecipes();
}

function deleteRecipe(index) {
  // Remove the recipe from the data array
  recipes.splice(index, 1);

  // Update the displayed recipe list
  displayRecipes();
}
// Attach event listener to the form submit event
const recipeForm = document.getElementById("recipe-form");
recipeForm.addEventListener("submit", addRecipe);

// Display initial recipes
displayRecipes();
