import { isAuthenticated } from './authService.js';

// Protect routes that require authentication
export function initAuthGuard() {
    const currentPath = window.location.pathname;
    const publicPaths = ['/login.html', '/register.html'];
    
    if (!publicPaths.includes(currentPath) && !isAuthenticated()) {
        window.location.href = 'login.html';
    }
    
    if (publicPaths.includes(currentPath) && isAuthenticated()) {
        window.location.href = 'index.html';
    }
}