console.log("Hello World!");
console.log(13);
console.log(true);

const a = 10;
const b = 20;
const sum = a + b;
console.log(sum, "SUM");
const multiply = a * b;
console.log(multiply, "MULTIPLY");
const difference = b - a;
console.log(difference, "DIFFERENCE");

let c = 30;
console.log(c, "30");
c = 40;
console.log(c, "40");

let firstName = "Anil";
let middleName = "Simha";
let lastName = "Tallapragada";

const fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

let arr = [10, 20, 30, 40];
console.log(arr);
console.log(arr[3]);
console.log(arr[0] + arr[2]);

let arrStrings = ["Anil", "Simha", "Tallapragada"];
console.log(arrStrings[1]);
console.log(arrStrings[0] + " " + arrStrings[2]);

let arrOfArrays = [10, 20, [30, 40, 50, 60, [70, 80, 90, 100]]];

console.log(arrOfArrays[2][4][3]);

let obj = {
  year: 1992,
  month: "Sep",
  firstName: "Anil",
  lastName: "Simha",
};
console.log(obj.month);
console.log(obj.firstName + " " + obj.lastName);
