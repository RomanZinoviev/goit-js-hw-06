const inputToControl = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

const inputValueEl = inputToControl.value;
console.log(inputValueEl);
textToChange.style.fontSize=inputValueEl+"px";

const handleChange = (event) => {
    const inputValue = event.currentTarget.value;
    textToChange.style.fontSize=inputValue+"px";
    }

inputToControl.addEventListener("input", handleChange);

