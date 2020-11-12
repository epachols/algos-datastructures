// see the difference between these two adding functions which do the same thing.

function addUpTo(n) {
    return n*(n+1)/2;
}
// TODO: this one is way faster! O(1)

function addUpToN(n) {
    let total= 0;
    for (let i=1; i<=n; i++) {
        total +=i;
    }
    return total;
} // O(n)

// time can be a problem, timing is not always precise enough to give a good measure of algorithms and their functionality... soooo

// so why not count the number of simple operations the computer needs to run?

//   TODO: to investigate general algo trends with Big O, see this tracker tool! https://rithmschool.github.io/function-timer-demo/