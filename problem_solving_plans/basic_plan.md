# problem solving strategies - from george polya how to solve it

## understand the problem

    1. can I restate the problem in my own words?
    2. what are the inputs?
    3. what are the outputs?
    4. can the outputs be determined from the inputs?
    5. how should I label the important pieces of data that are part of this problem?

...ex "write a function that takes two numbers and returns their sum".

    1. implement addition
    2. what kind of numbers? how big? how small? is it javascript?
    3. should it turn up as an integer? a float? a float pass? a string? what?
    4. MOST cases the answer is yes. but what if it takes two and someone only puts in 1?
    5. really... what matters?

## explore concrete examples

seeing an exemplar works as a sanity check, helps you understand the problem better
user stories! unit tests!

1. start with simple examples
2. then go to more complex ones
   like inputting strings in a charcount. do we care about spaces? numbers? capitalizations?
3. then think about empty inputs?
   do we return null? undefined?
4. what about invalid inputs?

## break it down

explicitly write down the steps (pseudocode) you need to take to get there.
what about parts you don't understand? hilights the problems you are less confident with, etc.

## solve/simplify

solve if you can, if you can't, solve something close but similar! much better to keep writing things you know how to do and leave the hardest part for last.

1. find the core issue/difficulty with what you're trying to do
2. temporarily ignore said difficulty if you can
3. write a simplified solution
4. then incorporate that difficulty back into the problem

## look back and refactor

1. can you check the result?
2. can you derive the result differently?
3. can you understand it at a glance?
4. can you use the result or method for some other problem?
5. can you improve the performance of your solution?
6. can you think of other ways to refactor?
7. how have other people solved this problem?
