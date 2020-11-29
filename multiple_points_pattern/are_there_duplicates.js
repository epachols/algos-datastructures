// write afunction called are there duplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// arguments object not available in arrow functions, use spread operator

// (1,2,3,4,5)
// [1,2,3,1,2]




// this one makes set out of the arguments, and if its size is different than the number of individual arguments, we have a duplicate. it certainly won't be MORE than the initial number of arguments. how could it?

areThereDuplicatesOneLiner = (...args) => {
    return new Set(args).size !== arguments.length
}





// note that sorting them first made it easy to compare the adjacent values. could you even do it without sorting without doing a set?

//TODO: this solution apparently doesn't even work on the udemy site - 
// TODO: EDIT: - this solution ONLY works on numerical values. 
areThereDuplicates = (...args) => {
    // sort it first
    args.sort((a,b) => a - b);
    let start = 0;
    let next = 1;
    while (next < args.length){
        if (args[start]  == args[next]) {
            return console.log(true); true;
        }
        start++
        next++
    }
    return console.log(false); false;
}
// TODO: this solution apparently doesn't even work? it's because of javascript coaxing.
// javascript will return a to evaluate as less than b, but the coax won't sort letters based on a simple comparison operator.

areThereDuplicates(1,1,2,3) 
areThereDuplicates(1,2,3) 
areThereDuplicates('a','b','c','d','e','a') 

