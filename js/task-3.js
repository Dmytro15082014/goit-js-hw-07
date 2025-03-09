"use strict"
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleName);

function handleName(event) {
    if (event.target.value === "" || event.target.value === " ") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = event.target.value.trim();
    };
}