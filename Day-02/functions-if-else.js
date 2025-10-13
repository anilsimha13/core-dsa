function greet(inputName) {
  console.log("Hello, Good morning! Have a nice day!!" + " " + inputName);
}
greet("Anil Simha");

function sum(a, b) {
  let c = a + b;
  console.log(c);
}
sum(88, 33);

function multiple(a, b) {
  let c = a * b;
  console.log(c);
}
multiple(88, 33);

function sqOfnumb(a, b) {
  let res = a ** b;
  console.log(res);
}

sqOfnumb(3, 3);

function modula(a, b) {
  let res = a % b;
  return res;
}
let mod = modula(10, 100);
console.log(mod);

function voteEligibilityCheck(age) {
  age <= 0
    ? console.log("Please check your age once again")
    : age >= 18 && age <= 100
    ? console.log("You are eligible")
    : console.log("You are not eligible");
}
voteEligibilityCheck(21);
voteEligibilityCheck(-21);
voteEligibilityCheck(212);

function evenOrODD(num) {
  num % 2 == 0
    ? console.log("The entered number is valid: ", num)
    : console.log("The entered number is not valid: ", num);
}

evenOrODD(13);
evenOrODD(12);
