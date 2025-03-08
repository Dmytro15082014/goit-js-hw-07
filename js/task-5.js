function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorText = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", changeColorBody);

function changeColorBody(e) {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorText.textContent = color;
}
