Exercise: Defensive programming
Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs.

How would you then refactor the function given below with defensive programming in mind?

For this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

The length of the word parameter cannot be less than 2.

The length of the match parameter must be 1.

The type of both the word and the match parameters must be string.

You will use the code below to complete your task:

function letterFinder(word, match) {

    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }


No Output

Here are the tasks to complete:

Just above the for loop in the letterFinder function definition, declare a variable named condition1 and assign to it the following code: typeof(word) == 'string' && word.length >= 2.

Declare a variable named condition2 on the next line and assign to it and assign to it a check that makes sure that the type of match is a string AND that the length of the match variable is equal to 1.

Write an if statement on the next line that checks that condition1 is true, and condition2 is true

Move the rest of the function's body into the if statement you wrote in the previous step.

Code an "else" block after the "if" condition and console.log the following: "Please pass correct arguments to the function.".

As a failing test, run the letterFinder function and pass it with any two numbers as arguments.

As a passing test, run the letterFinder function and pass it with correct arguments, such as: letterFinder("cat", "c").

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if(condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {


Please pass correct arguments to the function.
Found the c at 0
---No match found at 1
---No match found at 2