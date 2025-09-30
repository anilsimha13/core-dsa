//Search an element in an array and return the index, if not present return -1

let arr = [100, 102, 103, 104, 107, 108, 109, 110];

function searchElement(num) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) {
      return `Index of given number ${num} is:  ${i}`;
    }
  }
  return -1;
}

let res = searchElement(109);
console.log(res);

//Write a function that returns the number of negative numbers in an array

let arr1 = [-1, -2, 100, 200, 300, 400, -111, -100, -110, 198, -923];

let count = 0;

function findNegativeNumbers() {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let res1 = findNegativeNumbers();
console.log(res1);

// Write a function that returns the largest number in an array

let arr2 = [
  -1, -20, -200, -2000, -20000, -30, -300, -3000, -30000, -40, -400, -4000,
  -40000, -50,
];

let largestNum = -Infinity;

function findLargestNumber() {
  for (let i = 0; i <= arr2.length; i++) {
    if (arr2[i] > largestNum) {
      largestNum = arr2[i];
    }
  }
  return largestNum;
}

let res3 = findLargestNumber();
console.log(res3);

// Write a function to find the second largest number in the given array
console.log("---");
let firstLargestNumber = -Infinity;
let secondLargetNumber = -Infinity;

function secondLargetNumberFn(arr) {
  if (arr.length < 2) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNumber) {
      secondLargetNumber = firstLargestNumber;
      firstLargestNumber = arr[i];
    } else if (arr[i] > secondLargetNumber && arr[i] != firstLargestNumber) {
      secondLargetNumber = arr[i];
    }
  }
  return secondLargetNumber;
}

let res4 = secondLargetNumberFn([-10, -2, -8, -5, 10, 10, 6]);

console.log(res4);
