const getNode = (selector) => {
  return document.querySelector(selector);
};

const getNodesListInNode = (node, selector) => {
  return node.querySelectorAll(selector);
};

const showCategories = (itemsList) => {
  itemsList.forEach((li) => {
    console.log("Category: " + li.querySelector("h2").textContent);
    console.log("Elements: ", li.querySelectorAll("li").length);
    console.log("");
  });
};

const list = getNode("#categories");
const items = getNodesListInNode(list, "li.item");

console.log("Number of categories: ", items.length);
console.log("");

showCategories(items);
