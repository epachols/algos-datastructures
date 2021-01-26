// write a function called recursiverange that takes in a number and adds up all the numbers from 0 to the number passed 

function recursiveRange(n) {
    if (n===0) return 0;
    return n + recursiveRange(n-1);
}