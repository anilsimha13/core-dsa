let arr = [100, 200, 300, 400, 500];

let len = arr.length;

console.log(len);
console.log("----------------------------------");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("----------------------------------");

for (let i = arr.length; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("----------------------------------");

let arr1 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    console.log(arr1[i]);
  }
}
