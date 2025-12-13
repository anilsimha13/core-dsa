/*
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
*/

function starPattern_8(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + toggle + " ";
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
starPattern_8(5);
console.log("=======");

/*
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
*/

function starPattern_7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      row = row + toggle + " ";
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
starPattern_7(5);
console.log("=======");
/*
 . . . . *
 . . . * *
 . . * * *
 . * * * *
 * * * * *
 */

function starPattern_6(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + ".";
    }
    for (k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
starPattern_6(5);
console.log("=======");
/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */
function starPattern_5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
starPattern_5(5);
console.log("=======");
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/
function starPattern_4(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}
starPattern_4(5);

console.log("================");
function starPattern_3(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1) + " ";
    }
    console.log(row);
  }
}
starPattern_3(4);
console.log("================");
/*
1
1 2
1 2 3 4
1 2 3 4 5
*/

function starPattern_2(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}
starPattern_2(4);

console.log("================");

/*
 *
 * *
 * * *
 * * * *
 */

function starPattern_1(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
starPattern_1(4);
console.log("================");
/*
 * * * *
 * * * *
 * * * *
 * * * *
 */

function printStarPattern4_4(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
printStarPattern4_4(4);
