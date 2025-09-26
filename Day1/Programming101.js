console.log("Hello, Programming 101!");

console.log("I am String: ", "Hello, World!");
console.log("I am Number: ", 123);
console.log("I am Boolean: ", true);
console.log("I am Boolean: ", false);
console.log("I am Null: ", null);
console.log("I am Undefined: ", undefined);
console.log("I am Array: ", [1, 2, 3, 4, 5]);
console.log("I am Object: ", { name: "John", age: 30 });
console.log("I am adding two numbers: ", 5 + 10);
console.log("I am subtracting two numbers: ", 10 - 5);
console.log("I am multiplying two numbers: ", 5 * 10);
console.log("I am dividing two numbers: ", 10 / 5);
console.log("I am finding modulus of two numbers: ", 10 % 3); // Remainder
console.log("I am finding power of a number: ", 2 ** 3);
console.log("I am concatenating two strings: ", "Hello, " + "World!");

let a = 10;
let b = 20;
sum = a + b;
console.log("Sum of a and b is: ", sum);

let fName = "Anil";
let lName = "Simha";
let age = 30;
let fullName = fName + " " + lName;
console.log("Full Name is: ", fullName + " and Age is: " + age);

let arr = [
  1,
  "Anil",
  true,
  [100, 200],
  { obj1: "1", obj2: "2" },
  null,
  undefined,
  "",
];

console.log(arr[2]);
console.log(arr[4].obj2);
console.log(arr[3][1]);
console.log("length", arr.length);
console.log(arr[arr.length - 3]);
console.log(arr[arr.length + 3]); //undefined

let arr1 = [
  100,
  200,
  300,
  400,
  [500, 600, 700, 800, [900, 1000, 1001, 1002, [1003, 1004, 1005]]],
];

console.log("Printing 1005", arr1[4][4][4][2]);

let obj2 = {
  fName: "Anil",
  lName: "Simha",
  Age: 30,
  employer: "Accenture",
  employed: true,
};

console.log(obj2.fName + " " + obj2.lName);
