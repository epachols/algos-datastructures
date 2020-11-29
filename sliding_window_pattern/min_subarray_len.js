// take in an array, and a number, and determine the smallest subarray length where the sum is greater than or equal to the number

// going to try to solve this 'shrinking window'

function minSubArrayLen(arr, n) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  // first we start with a window of length 0.
  while (start < arr.length) {
    // then we expand the window until the sum is >= n
    if (total < n && end < arr.length) {
      total += arr[end];
      end++;
    }
    // once total is good, we can shrink it.
    // then we shrink from the beginning until...
    else if (total >= n) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // taking care of getting to the end
    else break;
  }
  return minLen = Infinity ? 0 : minLen; 
}

// solve in O(n) time and O(1) space

// the pattern here is to set up a while loop, and check for multiple conditions and perform a 'honing' operation each time. this is definitely more than a flat n, but way better than nesting the loops.
