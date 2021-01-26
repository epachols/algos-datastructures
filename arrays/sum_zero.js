// write a function called sumZero which accepts a sorted array of integers the function should find the first pair where the sum is 0, return an array that includes both values that sum to zero or undefined if a pair does not exist

// multiple pointers!

const sumZero = (sortedArr) => {
    // do something
    let ansArr = [];
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === 0 ) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left--;
        }
    }
}

// point far left and far right 