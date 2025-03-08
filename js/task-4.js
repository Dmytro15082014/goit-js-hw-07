"use strict"

const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault()
    const email = e.target.elements.email;
    const password = e.target.elements.password;
    const user = {};
    if (email.value === "" || password.value === "") {
        alert('All form fields must be filled in');
        return;
    } else {
        user.email = email.value.trim().toLowerCase();
        user.password = password.value.trim();
    }
    e.target.reset();
    console.log(user);
}
