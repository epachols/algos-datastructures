// loop over longer string
// loop over shorter string
// if chars don't match, break inner loop
// if the characters do match, keep going
// if you complete inner loop and find a match
// increment match count;
// return count

const naieveStringSearch = (string, search) => {
  // "i like to cow", "cow"
  let matchCount = 0;
  // outer loop
  for (let i = 0; i <= string.length - search.length + 1; i++) {
    for (let j = 0; j < search.length; j++) {
      if (search[j] !== string[i + j]) break;
      if (j === search.length - 1) matchCount += 1;
    }
  }
  return matchCount;
};
