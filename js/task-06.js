const validationInputEl = document.querySelector("#validation-input");
const dataLength = Number(validationInputEl.dataset.length);

const handlerCheckLength = (event) => {
    const inputLength = event.currentTarget.value.length;
    if (inputLength === dataLength) {
        event.currentTarget.classList.toggle("valid")
    }
    else{event.currentTarget.classList.toggle("invalid")}
     console.log(event.currentTarget)
};
const handlerReloadWhenFocus = (event) => {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.remove("invalid")
}

validationInputEl.addEventListener("blur", handlerCheckLength);
validationInputEl.addEventListener("focus", handlerReloadWhenFocus);

