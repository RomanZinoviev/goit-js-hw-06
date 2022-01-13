const validationInputEl = document.querySelector("#validation-input");
const dataLength = 6;
const handlerCheckLength = (event) => {
    const inputLength = event.currentTarget.value.length;
    if (inputLength === dataLength) {
        event.currentTarget.classList.toggle("valid")
    }
    else{event.currentTarget.classList.toggle("invalid")}
     console.log(event.currentTarget)
};

validationInputEl.addEventListener("blur", handlerCheckLength)