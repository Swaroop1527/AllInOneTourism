import { loginUser } from './authService.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    debugger;
    console.log('jsdjsgdgsdg');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');

    try {
        const user = loginUser(email, password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
        errorElement.textContent = error.message;
        errorElement.classList.add('show');
    }
});