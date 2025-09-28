for (let i = 5; i >= 3; i--) {
  console.log("Congratulations", i);
}

for (let i = 1; i <= 3; i++) {
  console.log("Congratulations brow", i);
}

for (let i = 2; i <= 9; i = i + 2) {
  console.log("Hello Broww", i);
}

let arr = [100, 200, 300, 400, 500];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("-----------");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 100) {
    console.log(arr[i]);
  }
}
console.log("-ODD-");

let arr1 = [1, 2, 4, 6, 7, 8, 9, 11, 13, 14, 19, 16, 17];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 != 0) {
    console.log(arr1[i]);
  }
}

console.log("Even");
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    console.log(arr1[i]);
  }
}
