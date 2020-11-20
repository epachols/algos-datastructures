// find out how many squares there are in between two base numbers.

function squares(a, b) {
  let floor = Math.floor(Math.sqrt(a));
  let ceil = Math.ceil(Math.sqrt(b));
  let counter = 0;

  for (let ii = floor; ii <= ceil; ii++) {
    let squared = ii ** 2;
    if (squared >= a && squared <= b) {
      counter++;
    }
  }
  return console.log("finalsquarescount", counter);
}

console.time("timing squares output");
squares(1, 10000000000000); // 3,162,277 squares
console.timeEnd("timing squares output");
// squares(1, 101); //10 squares
// squares(25, 81); // 5 squares
// squares(999999900, 1000000000); //0 squares
// squares(3, 6); // 1 square

// -----------------------------useless fun analogue-------------
// function squareMe(lower, upper) {
//   let arr = [];
//   for (let ii = lower; ii <= upper; ii++) {
//     arr.push(ii);
//   }
//   let squaresArr = [];
//   for (let num of arr) {
//     squaresArr.push(num ** 2);
//   }
//   return squaresArr;
// }

// let numOfSquares = squareMe(a, b).length;

// console.log(numOfSquares);
