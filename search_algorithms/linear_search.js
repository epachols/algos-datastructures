// the function accepts an array and a value, loops through the array and checks if the current array element is equal to the value, if found, return the index at which it is found, if never found, return -1.

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

const arr = [1, 3, 5, 6, 8, 15, 23, 15, 0];
const arr2 = [100];
console.log(linearSearch(arr, 15));
console.log(linearSearch(arr2, 100));
