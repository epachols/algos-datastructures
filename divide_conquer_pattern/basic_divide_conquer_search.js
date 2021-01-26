// take a SORTED array and search for this value based on comparison.

function search(array, val) {
    let min = 0;
    let max = array.length-1;

    // split it, check our midpoint 
    while (min <=max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = array[middle];

        if (array[middle] <val) {
            min = middle+1;
        }
        else if (arrary[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}