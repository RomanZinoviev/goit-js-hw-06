function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector("#controls>input");
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const createBoxes = (amount) => { 

};
const handlerCreateBoxes = (event) => { 
  event.currentTarget.value = amount;
  createBoxes
};


const destroyBoxes = () => {
  boxesEl.innerHTML = ""; 
};

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);


