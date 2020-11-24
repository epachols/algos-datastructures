# Common patterns (these don't cover everything)

Some well known patterns (greedy algo's, dynamic programming, divide and conquer, sliding window)

## Frequency Counter

uses objects or sets (map) to collect values/frequencies of values.

this can avoid nested for loops or O(n^2)

see strings/valid_anagram.js

## multiple Pointers

create pointers or values that correspond to an index or position and move towards the beginning, middle, or end based on a certain condition (while loops ,etc)

### with multiple pointers, you do several basic operations each time

1. you compare two numbers, or their output, etc.
2. usually do a while loop or something similar.
3. 3 options. your result is >, <, = to desired result.
4. change your pointers based on result

see sum_zero.js
see count_unique_values.js

## sliding window

we are looking for a subset of a set of data, let's say...

A max_subarray_sum.js

## divide and conquer -> this one's real

divide the data into smaller chunks and then deal with them in increasingly smaller bites via comparison statements/operations.
