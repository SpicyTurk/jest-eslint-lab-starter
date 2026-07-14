const { capitalizeWords, filterActiveUsers, logAction, users } = require('../index')


//Tests that pass

// test(`Capitalizes first letter of each word`, () => {
//     expect(capitalizeWords("hello world!")).toBe("Hello World!");
// });

// test(`Filter active users from inactive users`, () => {
//     expect(filterActiveUsers(users)).toEqual([{name: "Lisa", isActive: true}, {name: "Sharron", isActive: true}]);
// });

// test(`Logs if a user has logged out and adds a timestamp`, () => {
//     expect(logAction("log out", "Patrick")).toContain("User Patrick performed log out")
// });

//Edge Cases

// test(`Capitalizes first letter of each word`, () => {
//     expect(capitalizeWords("hello world$!")).toBe("Hello World!");
// });

// test(`Filter active users from inactive users`, () => {
//     expect(filterActiveUsers(users)).toEqual([{name: "Lisa", isActive: false}, {name: "Sharron", isActive: true}]);
// });

// test(`Logs if a user has logged out and adds a timestamp`, () => {
//     expect(logAction("logs out", "Patrick :)")).toContain("User Patrick performed log out")
// });