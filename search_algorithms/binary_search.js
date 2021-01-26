//sorted-only arrays. (yup)
// accepts a sorted array
// create a pointer at start of array, and a right pointer at end of array
// loop, while we haven't found the element
// make sure left less than right.
// if you find the value, return index
// if value is too small, move the left pointer up
// if the value is too large, move right pointer down.
// if you don't find it at all, return -1

function binarySearch(array, value) {
  let leftHand = 0;
  let rightHand = array.length - 1;
  let mid = Math.floor((rightHand + leftHand) / 2);

  while (leftHand < rightHand) {
    if (array[mid] === value) return mid;
    else if (array[mid] < value) leftHand = mid;
    else if (array[mid] > value) rightHand = mid;
  }

  return -1;
}

function binarySearch(array, value) {
  let leftHand = 0;
  let rightHand = array.length - 1;
  let mid = Math.floor((rightHand + leftHand) / 2);
  while (leftHand <= rightHand && array[mid] !== value) {
    if (array[mid] > value) rightHand = mid - 1;
    else leftHand = mid + 1;
    mid = Math.floor((rightHand + leftHand) / 2);
  }
  return array[mid] === value ? mid : -1;
}
