# DSA - Javascript

## Table of Contents

1. [Introduction](#1-introduction)
2. [Warm Up](#2-warm-up)
   - 2a. [Programming 101](#2a-programming-101)
   - 2b. [Functions, if-else](#2b-functions-if-else)
   - 2c. [Loops - 01](#2c-loops---01)
   - 2d. [Loops - 02](#2d-loops---02)

### 1. Introduction

- DSA stands for Data Structures and Algorithms.
- DSA is language agnostic.
- This repository contains implementations of various Data Structures and Algorithms using JavaScript.
- Need to dedicate a few hours daily to practice and improve your problem-solving skills.
- Consistent practice is key to mastering DSA concepts.
- Make your own notes as you progress through the problems.
- Follow the Curriculum.
- Need dedicated 3-4 months to get comfortable with DSA concepts.
- Understand DSA, it takes time and patience.
- Spaced repetition is the key to learning DSA.
- Happy coding! 🚀

### 2. Warm Up

#### 2a. Programming 101

_File Location:_ [programming101.js](./WarmUp/programming101.js)

_Topics Covered_

- Javascript runs the code line by line.
- `console.log()`
- Strings
- Numbers
- Booleans
- Variables (let, const, var)
- Basic Operators
- let vs const vs var
  - let: block-scoped, can be reassigned
  - const: block-scoped, cannot be reassigned
  - var: function-scoped, can be reassigned
- Concatenation
- Comments
- Arrays
- Objects

#### 2b. Functions, if-else

_File Location:_ [functionsANDifElse.js](./WarmUp/functionsANDifElse.js)

_Topics Covered_

- Function declarations
- Function parameters and arguments
- Return statements
- If-else conditionals
- Ternary operators
- Nested ternary operators
  _Topics Covered_

- Functions

```js
function evenORodd(num) {
  num % 2 == 0
    ? console.log("Entered number " + num + " is Even")
    : console.log("Entered number " + num + " is Odd");
}
evenORodd(13);
evenORodd(18);
```

#### 2c. Loops - 01

_File Location:_ [loops01.js](./WarmUp/loops01.js)

_Topics Covered_

- For loops
- While loops

```js
// For Loop Example
//Initialization, Condition, Increment/Decrement
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number: " + i);
}
```

```js
//For Loops - Iterating through an Array
let arrs = [10, 20, 30, 40];

for (let arr of arrs) {
  console.log(arr);
}

for (let i = 0; i < arrs.length; i++) {
  console.log(arrs[i]);
}
```

- While Loop Example

```js
let a = 0;
while (a < 4) {
  console.log("While Loop", a);
  a++;
}
```

#### 2d. Loops - 02

_Topics Covered_:

- Q1: Write a function that searches for a specific value in an array and returns its index. If the value is not found, return -1.
  - File Location: [searchElement](./WarmUp/searchElement.js)
- Q2: Write a function that returns the number of negative numbers in an array.
  - File Location: [countNegativeNumbers](./WarmUp/countNegativeNumbers.js)
- Q3: Write a function that returns the largest number in an array.
  - File Location: [findLargestNumber](./WarmUp/findLargestNumber.js)
- Infinity and -Infinity in Javascript
  - Infinity represents a value that is larger than any other number.
  - -Infinity represents a value that is smaller than any other number.
- Q4: Write a function that returns the smallest number in an array.
  - File Location: [findSmallestNumber](./WarmUp/findSmallestNumber.js)
