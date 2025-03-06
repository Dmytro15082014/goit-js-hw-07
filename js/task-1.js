"use strict"
const ulCategories = document.querySelector("#categories");

console.log(`Number of categories: ${ulCategories.children.length}`);

const itemsElement = document.querySelectorAll(".item");

const getCategoriesValue = (items) => {
    Array.from(items).forEach((element) => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    });
};

getCategoriesValue(itemsElement);