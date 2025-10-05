const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('All fields must be filled!');
        return;
    }

    const formData = {
        email: email.value,
        password: password.value,
    };

    console.log(formData);
    loginForm.reset();
})
