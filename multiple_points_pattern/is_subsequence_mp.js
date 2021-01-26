// write a function called isSubsequence which takes in two strings and checks whether the characters in the first string for m a subsequence of the characters in the second string. in other words, check to see if the first string exists somewhere in the second.


function subSequence(str1, str2) {

  let first = 0;
  let second = 0;
  if (!str1.length) {
    return true;
  }
  while (second < str2.length) {
    if (str1[first] === str2[second]) {
      first++;
    }
    if (first === str1.length) {
      return true;
    }
    second++;
  }
  return false;
}

// O(N + M) time and O(1) space.

// in this problem, we will move ahead on the second string every iteration of the while loop. we will move ahead on the first string ONLY when we find a match. If we never get to the end of the first string, but second string is over, we will say NO DICE.

// if, however, we move ahead enough in the first string to reach the end, we will have found enough matches in the second string to get through the first. the edge case in if str.length is 0 means that "nothing" is certainly in the second string, no matter what it is.