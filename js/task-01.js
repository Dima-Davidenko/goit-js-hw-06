const getNode = (selector) => {
  return document.querySelector(selector);
};

const createNodesListInNode = (node, selector) => {
  return node.querySelectorAll(selector);
};

const outputLiContent = (itemsList) => {
  itemsList.forEach((li) => {
    console.log("Category: " + li.querySelector("h2").textContent);
    console.log("Elements: ", li.querySelectorAll("li").length);
    console.log("");
  });
};

const ulNode = getNode("#categories");
const liInUl = createNodesListInNode(ulNode, "li.item");

console.log("Number of categories: ", liInUl.length);
console.log("");

outputLiContent(liInUl);
