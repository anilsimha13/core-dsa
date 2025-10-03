function countDigits(n) {
  count = 0;
  n = Math.abs(n); // converts number from negative to positive
  if (n == 0) {
    return 1;
  }
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

console.log(countDigits(23467));
console.log(countDigits(1234567890));
console.log(countDigits(0));
console.log(countDigits(-1234567890));
