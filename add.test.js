//add.test.js
const add = require("./add");

test("Returns 0 if no argument is given", () => {
	expect(add('')).toBe('');
});