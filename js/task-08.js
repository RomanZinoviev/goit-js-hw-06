const loginForm = document.querySelector(".login-form")

const handleLoginForm = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    const elementObject = {};
      if (email.value === "" || password.value === "") {
      return  alert("Заполните все поля!");
    }
        elementObject.email = email.value;
    elementObject.password = password.value;
    console.log(elementObject);
           
    event.currentTarget.reset();
};

loginForm.addEventListener("submit", handleLoginForm);