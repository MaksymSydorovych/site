const form = document.querySelector("form");
const name = document.querySelector("#name");
const tlf = document.querySelector("#tlf");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const comfirm = document.querySelector("#comfirm");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
    if (checkLength(name.value, 1) && checkLength(tlf.value, 8) && validateEmail(email.value) && checkLength(message.value, 1)) {
        button.disabled = false;
    } else {
        
        button.disabled = true;
    }
}
name.addEventListener("keyup", checkIfButtonIsDisabled);
tlf.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
message.addEventListener("keyup", checkIfButtonIsDisabled);


function submitForm(event) {
    event.preventDefault();
    comfirm.innerHTML = '<div class="comfirm"><p>Your message has been sent<p></div>';
    form.reset();
}

form.addEventListener("submit", submitForm);


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

