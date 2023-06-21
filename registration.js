let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const Form = document.querySelector('#Reg-Form');



Form.addEventListener('submit', function(e) {
    e.preventDefault();

    firstnameValue = firstname.value.trim();
    lastnameValue = lastname.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();

    localStorage.setItem('firstname', firstnameValue);
    localStorage.setItem('lastname', lastnameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('password', passwordValue);

});