let counterValue = 0;
const valueEl = document.querySelector("#value");
const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");

const handlerDec = () => {
    counterValue -= 1;
    console.log(counterValue)
    valueEl.textContent = counterValue;
};
const handlerInc = () => {
    counterValue += 1;
    console.log(counterValue)
    valueEl.textContent = counterValue;
}  
buttonDecrement.addEventListener("click", handlerDec);
buttonIncrement.addEventListener("click", handlerInc);