function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector("#controls>input");
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
let boxWidth = 20;
let boxHeight = 20;
// console.log(inputEl)

const createBoxes = (amount) => { 
  const boxArray = [];
  for (let i = 0; i < amount; i++) {
    boxWidth += 10;
    boxHeight += 10;
    let box
    box = document.createElement("div");    
    box.style.width = boxWidth + "px";
    box.style.height = boxHeight + "px";
    box.style.backgroundColor = getRandomHexColor();
        boxArray.push(box);    
  }
  // console.log(boxArray)
  // const arrayWithDives = boxArray.map(box => {
  //  box = document.createElement("div");
  //   box.style.width = 30 + "px";
  //   box.style.height = 30 + "px";
  //   box.style.backgroundColor = getRandomHexColor();
  // }).reduce((allBoxes, box) => {
  //   box.style.width += 10;
  //   box.style.height += 10;
  //   allBoxes.push(box);
  // }
  //   , []);
  // return arrayWithDives;
  return boxArray
};
const handlerCreateBoxes = (event) => { 
  boxesEl.append(...createBoxes(inputEl.value));
  
};


const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  location.reload();
};

buttonCreate.addEventListener("click", handlerCreateBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);


