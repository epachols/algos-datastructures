# Objects - 

Object.keys(<passedinobj>) will give you the keys in an object.

same thing with .values, .entries
these are O(N)

.hasownproperty is O(1) : is there a thing in here?

# Arrays - ordered.

insertion at the beginning of an array os O(n) because you have to reindex everyone.
same for removing from beginning!

push and pop are better than shift and unshift, making an array a better option for a stack! BAD for queues. BAD BAD.

search grows O(N) here. (sorting can make it faster with binary) etc;

note that sort for standard arrays averages out around nlogN, which is lame. 