function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
function createBoxes(amount) {  
  const markup = [];
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i++){    
    const elementHtml = `<div style = "background-color: ${getRandomHexColor()}; width: ${width += 10}px; height: ${height += 10}px;"></div>`;
    markup.push(elementHtml);    
  }
  return markup;
};

function destroyBoxes() {
  boxContainer.innerHTML = "";
};

function handleCreateBoxes() {
  if (boxQuantity.value <= 100 && boxQuantity.value >= 0) {
    const result = createBoxes(boxQuantity.value);  
    boxContainer.insertAdjacentHTML("afterbegin", result.join(""));
  };
  boxQuantity.value = null;  
};


const boxQuantity = document.querySelector(".box-quantity");
const btnCreate = document.querySelector(".box-create");
const btnDestroy = document.querySelector(".box-destroy");
const boxContainer = document.querySelector("#boxes");

btnCreate.addEventListener("click", handleCreateBoxes);
btnDestroy.addEventListener("click", destroyBoxes)