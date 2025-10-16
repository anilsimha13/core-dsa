# DSA

## Table of Contents

- [Day-01 | Warm up](#day-01--warm-up)
- [Day-02 | Function, if-else](Day-02-Function-if-else)
- [Day-03 | Loops01](Day-03-Loops01)

## Day-01 | Warm up

- **Programming 101**
  - **Const**
    - When any value is assigned to constant, it cannot be changed later.
    - Constants are block-scoped, much like variables defined using let. However, they cannot be redeclared or updated.
    - Constants can be declared using the const keyword.
    - It is a good practice to use constants for values that should not change throughout the program.
  - **Let**
    - The let statement declares a block-scoped local variable, optionally initializing it to a value.
    - Variables defined with let cannot be redeclared within the same scope.
    - Variables defined with let are not hoisted to the top of the block.
    - It is a good practice to use let for variables that may change their value throughout the program.
- **Arrays**
  - Arrays are used to store multiple values in a single variable.
  - Arrays can hold values of different data types, including numbers, strings, objects, and even other arrays.
  - Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
  - Common array methods include push(), pop(), shift(), unshift(), splice(), slice(), and forEach().
- **Objects**
  - Objects are used to store collections of data in key-value pairs.
  - Keys are strings (or Symbols) that represent the property names, while values can be of any data type.
  - Objects can be created using object literals (e.g., const obj = { key: value }) or the Object constructor (e.g., const obj = new Object()).
  - Common object methods include Object.keys(), Object.values(), Object.entries(), and hasOwnProperty().

## Day-02 | Function, if-else

- 1. Functions in JavaScript

  - What is a Function?
  - Function Declaration
  - Function Expression
  - Arrow Functions
  - Parameters and Arguments
  - Return Statement

- 2. Conditional Statements
  - if Statement
  - if-else Statement
  - else-if Ladder
  - Nested if Statements

## Day-03 | Loops01

- For Loop

```js
for (let i = 0; i < 5; i++) {
  //for(initialization;condition;change)
  console.log("Hello World!!!");
}
```

- While Loop

```js
let i = 0;
//initialization
while (i < 5) {
  //condition
  console.log("Hello World");
  i++;
  //change
}
```
