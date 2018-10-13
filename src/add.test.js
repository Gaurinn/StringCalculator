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

test("Returns sum of multiple arguments", () => {
	expect(add("1,2,3")).toBe(6);
});

test("Test the Add method to handle new lines between numbers (instead of commas", () => {
	expect(add("1\n2,3")).toBe(6);
});