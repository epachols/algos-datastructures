// find the longest unique substring using the sliding window pattern.

const findLongestSubstring = (str) => {
    let longest = 0;
    // this one uses extra space to store the last seen of each character
    let seen = {};
    // have to have a place to start
    let start = 0;

    for (let i=0; i<str.length; i++) {
        let char = str[i];
        // if the character is IN our object dictionary, we need to set the new start point to
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // to include our currently counted index, we now upgrade longest to..
        longest = Math.max(longest, i- start + 1);
        // now we update our last seen dictionary
        // setting the index to 'one ahead' helps us not double count.
        seen[char] = i + 1;
    }
    return longest;
}