//Write a function that searches for a specific value in an array and returns its index. If the value is not found, return -1

function searchElement(arr, ele) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == ele) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 20, 30, 40, 50, 54, 90];

let res = searchElement(arr, 90);
console.log(res);
