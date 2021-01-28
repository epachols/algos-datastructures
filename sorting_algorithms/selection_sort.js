// store first element as smallest thing we've seen so far
// compare this item to next item in array until we find a new min
// if smaller number found, designate new loop min and continue til end of array, looking for new min
// if min is not the value we started with as min, swap the two

function selectionSort(array) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      if (i !== min) swap(array, i, min);
    }
  }
  return array;
}
