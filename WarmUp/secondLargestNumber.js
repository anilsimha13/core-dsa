let firstLargestNumber = -Infinity;
let secondLargestNumber = -Infinity;
function findSecondLargestNumber(arr) {
  if (arr.length < 2) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNumber) {
      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber && arr[i] != firstLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  return secondLargestNumber;
}

let arr = [10, 100, 20, 500, 30, 500, 50, -1, -100];

let res = findSecondLargestNumber(arr);
console.log(res);
