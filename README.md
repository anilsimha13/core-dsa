# DSA - Javascript

## Table of Contents

1. [Introduction](#1-introduction)
2. [Warm Up](#2-warm-up)
   - 2a. [Programming 101](#2a-programming-101)
   - 2b. [Functions, if-else](#2b-functions-if-else)

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
