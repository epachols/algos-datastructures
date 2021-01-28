// builds up the sort by gradually creating a larger left half which is always sorted

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];

//     for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }

//   return arr;
// }

function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

//  NOTE: doesn't work with es6 let, as the var global declaration of j outside the loop makes it accessable on line 23 but bad form here.
insertionSort([2, 1, 9, 76, 4]);

// insertionSort([2, 1, 9, 76, 4]);

// insertion sort is good at :: online data. say we are receiving numbers, we can place them where they need to go, works well on nearly sorted data.
