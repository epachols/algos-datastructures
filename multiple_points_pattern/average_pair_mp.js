// write an fx called average pair that takes in a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one.

// with multiple pointers, you do several basic operations each time. 
// 1. you compare two numbers, or their output, etc.
// 2. usually do a while loop
// 3. 3 options in this case. your result is >, <, = to desired result.

const averagePair = (arr, num) => {
    // do something
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--
        }
    }
    return false;
    // return true if yes, false if no (default)
};

// here we basically say: ok. let's take the outside average and compare it to our target. too low? move the lower bound up. too high? move the upper bound down. just right? BAM!
