// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {};
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
// Task 1 - end

// Task 2 - add new field sum, that should contain sum of fields a + b
const objWithSum = {
  a: 10,
  b: 10
};
objWithSum.sum = objWithSum.a + objWithSum.b;

// Tsk 3 - end

// Task 3 - rewrite nums array with [2,3] array
const objWithNums = {
  nums: [1]
};
objWithNums.nums = [2,3];

// Task 4 - end
// add a new field "message" and set value "Hello, World!"
const objWithMessage = {
  language: "JavaScript"
};
objWithMessage.Message = "Hello, Word";
// code here

export { objWithNewFields, objWithSum, objWithMessage, objWithNums };
