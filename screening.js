// write a function that given a string as an input,
// returns true if the string is a palindrome
// returns false if not

// from mock screening (pre-interview screening) with microsoft.


function palindrome(str) {
    var middle = str.length/2;
   for (var i = 0; i < middle; i++) {
     if (str[i] !== str[str.length - 1 - i]) {
       return false;
     }
     middle--;
   }
    return true;
  }