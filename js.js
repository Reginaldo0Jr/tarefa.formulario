const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();

    alert("Formulario enviado com sucesso!")

})

function checkInputUsername() {
    const usernameValue = username.value;

    console.log(usernameValue)

    if (usernameValue === "") {
        errorInput(username, "Nome do Usuraio Obrigatorio!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Email Obrigatorio!")
    } else {
        const formItem = email.parentElement
        formItem.className = "form-content"
    }
}

function checkInputNumber() {
    const numberValue = number.value;

    if (numberValue === "") {
        errorInput(number, "Numero de telefone Obrigatorio!")
    } else {
        const formItem = number.parentElement
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Senha obrigatoria!")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter o minino de 8 caracteres")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatoria!")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não conferem")
    } else {
        const formItem = passwordConfirmation.parentElement
        formItem.className = "form-content"
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputNumber();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every((item) => { return item.className === "form-content" });

    if (isValid) {
        alert("Cadastrado com sucesso!")
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;

    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}