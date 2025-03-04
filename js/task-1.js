"use strict"
const ulCategories = document.querySelector("#categories");

console.log(`Number of categories: ${ulCategories.children.length}`);

const itemsElement = document.querySelectorAll(".item");

const getCategoriesValue = (items) => {
    for (const item of items) {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length}`);
    }
};

getCategoriesValue(itemsElement);