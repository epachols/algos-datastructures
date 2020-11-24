// write a function called maxsubarraysum which accepts an array of integers anda number called name. the function should calculate the maximum sum of n consecutive elements in the array. 

maxSubarraySum = (array, n) => {
    let maxSum = 0;
    let temSum = 0;
    if (array.length < n) return null;

    // first loop does whu? makes first windowed sum.
    for (let i=0; i<Number; i++) {
        maxSum+=array[i]
    }
    tempSum = maxSum;
    // second loop does whhu? start where sum left off, lop off the start, add the next one, then compare!
    for (let ii=n; ii<array.length; ii++) {
        tempSum = tempSum - arr[ii-n] + arr[ii];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

