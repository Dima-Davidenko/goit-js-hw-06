const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createIndgridientList = (ingredients) => {
  const nodesList = [];
  ingredients.forEach((ingridient) => {
    const element = document.createElement("li");
    element.textContent = ingridient;
    element.classList.add("item");
    nodesList.push(element);
  });
  return nodesList;
};
const list = document.querySelector("#ingredients");

const ingridientsList = createIndgridientList(ingredients);

list.append(...ingridientsList);
