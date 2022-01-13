const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

const handlerName = (event) => {
    const name = event.currentTarget.value;
    if (name === "") { nameEl.textContent = "Anonymous"; }
    else { nameEl.textContent = name; }
};

inputEl.addEventListener("input", handlerName);
