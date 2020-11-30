// write a function called fib that takes in a number  n and returns the nth number in the fibonacci sequence. (each thing after 1 is equal to the sum  of the previous two numbers)

function fib(n) {
    if (n<=2) return 1
   return (fib(n-1)+fib(n-2)) 
}


// had a hangup because chose to write (n-1 === 1) in the if statement. doesn't that just mean 2? lol make sure your inputs aren't needlessly dumb! :P

// 1 = 0 + 0
// 1 = 0 + 1
// 2 = 1 + 1
