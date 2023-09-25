const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    const lengthAtrb = input.getAttribute('data-length')

    if (input.value.length === parseInt(lengthAtrb)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});