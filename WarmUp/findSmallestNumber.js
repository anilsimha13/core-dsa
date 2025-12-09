let smallNumber = Infinity;

function findSmallestNumber(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < smallNumber) {
      smallNumber = arr[i];
    }
  }
  return smallNumber;
}

let arr = [-1, -2, -9, 9, 10, 19, 20];

let res = findSmallestNumber(arr);

console.log(res);
