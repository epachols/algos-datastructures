var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ansArr = [];
  if (nums.length < 3) return [];

  for (let i = 0; i < nums.length - 2; i++) {
    // if we get to a point where our first considered number is >0, we've gone too far. or if after sorting the highest valued number is still below zero...
    if (nums[i] > 0 || nums[nums.length - 1] < 0) break;
    // what about if we just tested all the possibilities of our next 'first number'?
    // if (i > 0 && nums[i] === nums[i-1]) continue; - evan doesn't think the i > 0 is necessary.
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      // evaluating individual sum
      const sum = nums[i] + nums[left] + nums[right];

      // if we're wrong...
      if (sum > 0) right--;
      else if (sum < 0) left++;
      // if we're right
      else {
        ansArr.push([nums[i], nums[left], nums[right]]);
        // taking care of skipping identical values
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // here throws me -> specifically, why would we increment both in the event of a win? wouldn't it be more logical to only negatively increment the right pointer? or am I not seeing the reason why it's safe to increment both immediately.
        //
        //  seems like incrementing both off the bat leaves you with the option of skipping the left pointer matched up with all the other right pointers after the first match.
        left++;
        right--;
      }
    }
  }
  return ansArr;
};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);

// I am wrong, and this solution works because 2 things. every time we loop through, we reassign the values of left and right to the next possible values.  After checking a single value's comparison options at maximum difference (only works once sorted)
