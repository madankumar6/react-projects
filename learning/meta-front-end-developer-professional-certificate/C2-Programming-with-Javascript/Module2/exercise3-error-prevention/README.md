Exercise: Error prevention
Instructions
Task 1: Code a function declaration
You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.

Task 2: Invoke the addTwoNums function with a number and a string
You need to invoke the addTwoNums using the following arguments: 5 and "5".

Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

Task 4: If the passed-in arguments are not numbers, throw an error
If either of the arguments passed to the addTwoNums are not numbers, you'll throw an error.

Specifically, code a conditional with the following logic:

if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the first argument is not a number'.

else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the second argument is not a number'.

else, console log a + b  

Once you've completed this task, all the code inside the try block will be inside these conditional statements.

Task 5: Update the catch block
Inside the catch block, update the code from console.log(err) to console.log("Error!", err).

Task 6: Invoke the addTwoNums function
Invoke the addTwoNums function using 5 and "5" as arguments.

Task 7: Add another console log under the addTwoNums function invocation
Add another line of code that console logs the string "It still works".



function addTwoNums(a, b) {
    try {

        if(typeof(a) !== 'number') {
            throw new ReferenceError('the first argument is not a number');
        }

        if(typeof(b) !== 'number') {
            throw new ReferenceError('the second argument is not a number');
        }

        console.log(a + b);
    }
    catch(err) {
        console.log(err);
    }
}

addTwoNums(5, "5");
console.log("It still works");

ReferenceError: the second argument is not a number
    at addTwoNums (file:///tmp/fujvz/submission.mjs:17:19)
    at file:///tmp/fujvz/submission.mjs:27:1
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
    at async handleMainPromise (internal/modules/run_main.js:59:12)
It still works

