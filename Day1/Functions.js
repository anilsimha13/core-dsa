//Example - 1
function nameOftheFunction() {
  console.log("Coming from the function");
}

nameOftheFunction();

//Example - 2
function greet(InsertYouName) {
  console.log("Namaste ", InsertYouName);
}
greet("Anil Simha");

//Example - 3
function sum(a, b) {
  console.log("Sum of given two numbers is: ", a + b);
}
sum(7, 6);
sum(17, 26);
sum(27, 36);
sum(37, 46);

//Example - 3

function squareOfNumber(num) {
  return num ** 2;
}

let storeNumber = squareOfNumber(7);
console.log(storeNumber);

//Example - 4

function voteEligibility(age) {
  age < 0
    ? console.log("Please enter a valid age")
    : age >= 18
    ? console.log("Go ahead and Vote")
    : console.log("Go and come once you reach 18");
}

voteEligibility(20);

voteEligibility(-1);

//Example - 5

function toCheckEvenOrOdd(num) {
  num % 2 == 0
    ? console.log("Given " + num + " number is Even")
    : console.log("Given " + num + " number is Odd");
}
toCheckEvenOrOdd(8);

toCheckEvenOrOdd(7);
