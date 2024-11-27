import { registerUser } from './authService.js';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('registerError');

    try {
        const user = registerUser(username, email, password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'login.html';
    } catch (error) {
        errorElement.textContent = error.message;
        errorElement.classList.add('show');
    }
});