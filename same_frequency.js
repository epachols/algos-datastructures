// frequency counter problem

// write a function called samefrequency. 
// given two positive integers, find out if the two numbers 
// have the same frequency of digits . 

function sameFrequency(first, second){
    let firstMap = new Map();

    while (first > 0) {
        let lastDigit = first % 10;
        if (firstMap.has(lastDigit)) {
            let countInMap = firstMap.get(lastDigit) + 1;
            firstMap.set(lastDigit, countInMap);
        } else {
            firstMap.set(lastDigit, 1);
        }
        first = Math.floor(first / 10);
    }

    while (second > 0) {
        let lastDigit = second % 10;
        let countInMap = firstMap.get(lastDigit);
        if (countInMap > 0) {
            firstMap.set(lastDigit, (countInMap - 1));
        } else {
            return false;
        }
        second = Math.floor(second / 10)
    }
return true;
}

// this solution involves O(n) extra space, and O(n) time.