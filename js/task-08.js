const loginBase = document.querySelector('.login-form');
loginBase.addEventListener('submit', function(event) {
    event.preventDefault();                
    // Щоб сторінка не перезавантажувалась

const emailInput = loginBase.elements.email;
const passwordInput = loginBase.elements.password;

if (emailInput.value === '' || passwordInput.value === '') {
 alert ('Всі поля повинні бути заповнені')
}
else {
    const formObj = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(formObj);
    loginBase.value.reset();
}
});