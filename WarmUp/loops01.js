for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}
console.log("--------------");
for (let i = 3; i < 5; i++) {
  console.log("Hello World", i);
}
console.log("--------------");

for (let i = 3; i < 10; i = i + 3) {
  console.log("Hello World", i);
}

console.log("--------------");

for (let i = 5; i > 0; i = i - 1) {
  console.log("Hello World", i);
}
console.log("--------------");

for (let i = 0; i < 5; i++) {
  console.log("Hello World!", i);
}
console.log("--------------");

for (let i = 5; i > 0; i--) {
  console.log("Hello World!", i);
}
console.log("--------------");

function greet(i) {
  console.log("Hello World from function", i);
}

for (let i = 0; i < 3; i++) {
  greet(i);
}

console.log("--------------");
let arrs = [10, 20, 30, 40];

for (let arr of arrs) {
  console.log(arr);
}
console.log("--------------");

for (let i = 0; i < arrs.length; i++) {
  console.log(arrs[i]);
}
console.log("----EVEN or ODD------");

let randomArr = [22, 12, 13, 19, 17, 20, 18, 29];

for (let i = 0; i < randomArr.length; i++) {
  randomArr[i] % 2 == 0
    ? console.log("This is the even number", randomArr[i])
    : console.log("This is the Odd number", randomArr[i]);
}

console.log("-----WHILE---------");

let a = 0;

while (a < 4) {
  console.log("While Loop", a);
  a++;
}
