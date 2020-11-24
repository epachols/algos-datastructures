//  multiple pointers!

// make a function that takes a sorted Array, then counts the unique values in said Array.
const a = [1, 1, 1, 1, 1, 2]; // 2
const b = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
const c = []; // 0
const d = [-2, -1, -1, 0, 1]; // 4

countUniqueValues = (sortedArray) => {
  let currentVal = 0;
  let checkVal = 1;
  let uniqueVals = 1;
  if (sortedArray.length === 0) {
    return console.log("done!", 0);
    0;
  }
  // since this is ordered.....
  while (currentVal < sortedArray.length - 1) {
    // likely outcomes: checkVal does exist but same value
    if (sortedArray[currentVal] === sortedArray[checkVal]) {
      checkVal++;
    }
    // likely outcomes: checkVal exists and is greater
    else if (sortedArray[currentVal] < sortedArray[checkVal]) {
      currentVal = checkVal;
      uniqueVals++;
      checkVal++;
    }
    // likely outcomes: the checkVal could not exist because we are done looping
    if (sortedArray[checkVal] === undefined) {
      return console.log("done!", uniqueVals);
      uniqueVals;
    }
  }
};

// countUniqueValues(a);
// countUniqueValues(b);
// countUniqueValues(c);
// countUniqueValues(d);

// ===========================MAP method======================
// using map set to check if the keys exist, since keys are unique it will only set once, and check for its existence. be sure to do this and not treat a classic object like a map, this is what they are for! don't leave your maps out in the cold #sadmap.
countUniqueValuesMap = (sortedArray) => {
  if (sortedArray.length === 0) {
    // return console.log(0);
    return 0;
  }
  let uniqueMap = new Map();

  sortedArray.forEach((element) => {
    if (!uniqueMap.has(element)) {
      uniqueMap.set(element, 1);
    }
  });
//   return console.log(uniqueMap.size);
    return uniqueMap.size;
};

// countUniqueValuesMap(a);
// countUniqueValuesMap(b);
// countUniqueValuesMap(c);
// countUniqueValuesMap(d);


// bonus: do this with O(N) extra time and O(1) space!
// while this one is the absolute fastest, and best for space, it mutates the initial array, a no-no in quite a few operations, especially front-end.

countUniqueValuesConstSpace = (sortedArr) => {
    if (sortedArr.length ===0) {
        return 0;
    }
    let i = 0;
    for (let j=1; j<sortedArr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
