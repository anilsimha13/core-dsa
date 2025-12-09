let largestNumber = -Infinity;
function findLargestNumber(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

let arr = [-1, -2, -3, -4, -5, -6];

let res = findLargestNumber(arr);
console.log(res);
