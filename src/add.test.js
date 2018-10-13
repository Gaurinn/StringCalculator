//add.test.js
const add = require("./add");

test("Returns 0 if no argument is given", () => {
	expect(add("")).toBe(0);
});

test("Returns number if only one argument", () => {
	expect(add("1")).toBe(1);
});

test("Returns sum of two arguments", () => {
	expect(add("1,2")).toBe(3);
});