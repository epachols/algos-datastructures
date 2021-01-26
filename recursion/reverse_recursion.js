// write a function that takes in a string and returns a new string in reverse!

function reverse(string) {
  if (string.length === 1) return string[0];
  //   this takes the last bit of the string, and concats it to the result of running the function again on the string minus its last member.
  return string
    .slice(string.length - 1)
    .concat(reverse(string.substr(0, string.length - 1)));
}
