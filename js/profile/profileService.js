import { getUserById, updateUser, addBooking } from '../auth/userService.js';

export function getUserProfile(userId) {
    const user = getUserById(userId);
    return user ? user.profile : null;
}

export function updateUserProfile(userId, profileData) {
    return updateUser(userId, {
        profile: {
            ...getUserProfile(userId),
            ...profileData
        }
    });
}

export function updatePreferences(userId, preferences) {
    const profile = getUserProfile(userId);
    return updateUser(userId, {
        profile: {
            ...profile,
            preferences: {
                ...profile.preferences,
                ...preferences
            }
        }
    });
}

export function getBookingHistory(userId) {
    const profile = getUserProfile(userId);
    return profile ? profile.bookingHistory : [];
}

export function addNewBooking(userId, bookingData) {
    return addBooking(userId, bookingData);
}