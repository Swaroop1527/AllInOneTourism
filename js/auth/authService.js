import { getUserByEmail, createUser } from './userService.js';

export function registerUser(username, email, password) {
    // Check if user already exists
    if (getUserByEmail(email)) {
        throw new Error('User already exists');
    }

    const newUser = createUser({
        username,
        email,
        password // In a real app, this should be hashed
    });

    return newUser;
}

export function loginUser(email, password) {
    const user = getUserByEmail(email);
    if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
    }
    return user;
}

export function isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
}

export function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

export function logout() {
    localStorage.removeItem('currentUser');
}