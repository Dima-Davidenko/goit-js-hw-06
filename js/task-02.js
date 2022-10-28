const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createListOfIndgredients = (ingredients) => {
  const nodesList = [];
  ingredients.forEach((ingredient) => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    nodesList.push(element);
  });
  return nodesList;
};
const list = document.querySelector("#ingredients");

const listOfIngredients = createListOfIndgredients(ingredients);

list.append(...listOfIngredients);
