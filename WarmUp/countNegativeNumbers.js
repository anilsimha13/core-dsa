let count = 0;
function negativeNum(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let arr = [0, -1, -2, -3, -9, 11, 12, 14, 16, -10, -19, 90];

let res = negativeNum(arr);
console.log(res);
