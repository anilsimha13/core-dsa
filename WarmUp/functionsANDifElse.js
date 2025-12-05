function printHelloWorld() {
  console.log("Hello World!");
}
printHelloWorld();

function greet(provideTheName) {
  console.log("Hello" + " " + provideTheName);
}

greet("Anil Simha");
greet("Ratnamala");
let son = "Taksh";
let daughter = "Takshya";
greet(son);
greet(daughter);

function sumOfTwoNumbers(a, b) {
  const result = a + b;
  console.log(result);
}

sumOfTwoNumbers(10, 3);

function square(x) {
  return x * x;
}
const ans = square(3);
const makeAnsTo13 = ans + 4;
console.log(makeAnsTo13);

//Person eligibility to vote or not

function voteEligibility(age) {
  age < 0
    ? console.log("Please enter a valid age")
    : age >= 18
    ? console.log("As you are " + age + " years, you are eligible to vote")
    : console.log("As you are " + age + " years, you are not eligible to vote");
}
voteEligibility(19);
voteEligibility(100);
voteEligibility(-10);

//Number is even or odd

function evenORodd(num) {
  num % 2 == 0
    ? console.log("Entered number " + num + " is Even")
    : console.log("Entered number " + num + " is Odd");
}
evenORodd(13);
evenORodd(18);
