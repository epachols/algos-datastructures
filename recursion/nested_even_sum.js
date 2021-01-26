const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// TODO: write a function that takes in an object, and sums all the even values nested inside it.

function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key % 2 === 0]) {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(`testing obj: 1, should be 6`, nestedEvenSum(obj1), `\n`);
console.log(`testing obj: 2, should be 10`, nestedEvenSum(obj2), `\n`);
