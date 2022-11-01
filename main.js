
const firstName = document.querySelector('#firstnameinput');
const lastName = document.querySelector('#lastnameinput');
const emailAddress = document.querySelector('#emailinput');
const password = document.querySelector('#passinput');

const firstNameError = document.querySelector('#firstnameerror');
const lastNameError = document.querySelector('#lastnameerror');
const emailError = document.querySelector('#emailerror');
const passError = document.querySelector('#passerror');

const button = document.querySelector('#button');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailError);
    validateEmpty(password.value, password, passError, 'Password cannot be empty');
    
});

function validateEmail(valueInput, divInput, divError){
    let regEXp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(regEXp.test(valueInput) == true){
        hideError(divInput, divError);
    }
    else{
        showError(divInput, divError, 'looks like this is not an email');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);
    }
    else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red'; 
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="error icon"><p class="error">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)'
    divError.innerHTML = '';
}

