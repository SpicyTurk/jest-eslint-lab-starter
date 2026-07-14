
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {"hello world!"} input - The input string.
 * @returns {"Hello World!"} - The formatted string.
 */
function capitalizeWords(input) {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */

const users = [
    {name: "John", isActive: false},
    {name: "Lisa", isActive: true},
    {name: "Frank", isActive: false},
    {name: "Sharron", isActive: true}
];

function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {"log out"} action - The action performed.
 * @param {"Patrick"} username - The name of the user.
 * @returns {"User Patrick performed log out"} - The log message.
 */
function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction, users };
