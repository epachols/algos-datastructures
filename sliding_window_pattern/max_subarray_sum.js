function maxSubarraySum(arr, num){
    // if they want a bigger window than the array, return null
    if (arr.length < num) return null;
    
    // what do we care about?
    let maxSum = -Infinity
    let currentSum = 0;
    
    // add up the first window.
    for (let i=0; i<num; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;
    
    // slide the window
    for (let ii=num; ii<arr.length; ii++) {
        currentSum = currentSum + arr[ii] - arr[ii-num];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    // return max
    return maxSum
    }

    // pay particular attention to starting and ending of loops. remember that there are implicit ways of doing this as well, that abstracts the need for be so specific. but for this problem.... easy.