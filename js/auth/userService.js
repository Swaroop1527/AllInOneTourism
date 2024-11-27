// User data management service

let users = [];

// Fetch users data from a local JSON file
async function loadUsers() {
    const response = await fetch('../data/users.json');
    const userData = await response.json();
    users = userData.users;
}

loadUsers(); // Initialize the users array

export function getAllUsers() {
    return users;
}

export function getUserById(id) {
    return users.find(user => user.id === id);
}

export function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

export function createUser(userData) {
    const newUser = {
        id: users.length + 1,
        ...userData,
        profile: {
            fullName: "",
            phone: "",
            preferences: {
                notifications: true,
                newsletter: false
            },
            bookingHistory: []
        }
    };
    
    users.push(newUser);
    saveUsers();
    return newUser;
}

export function updateUser(id, updates) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    users[userIndex] = { ...users[userIndex], ...updates };
    saveUsers();
    return users[userIndex];
}

export function deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;
    
    users.splice(userIndex, 1);
    saveUsers();
    return true;
}

export function addBooking(userId, booking) {
    const user = getUserById(userId);
    if (!user) return null;
    
    user.profile.bookingHistory.push({
        id: `B${Date.now()}`,
        ...booking,
        status: 'upcoming'
    });
    
    saveUsers();
    return user;
}

function saveUsers() {
    // In a real application, this would save to a database
    // For now, we're just updating our in-memory array
    localStorage.setItem('users', JSON.stringify(users));
}
