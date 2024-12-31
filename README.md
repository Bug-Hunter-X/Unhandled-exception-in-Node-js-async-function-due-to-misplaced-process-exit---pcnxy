# Unhandled Exception in Node.js Async Function

This repository demonstrates a common error in Node.js asynchronous programming: improper handling of exceptions when using `process.exit()` within `async` functions.

## The Bug
The original code uses `async/await` to read a file.  The `process.exit()` call was outside the `try...catch` block.  This prevents proper error handling when `fs.readFile` throws an error. The `process.exit` should always be inside the try catch block in this context.

## The Solution
The solution correctly places the `process.exit()` call *inside* the `try...catch` block, ensuring that the process exits gracefully even if an error occurs.  This results in better error handling. This demonstrates the importance of careful placement of process.exit() when dealing with asynchronous operations.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` (this will show the error)
3. Run `node bugSolution.js` (this will show the correct solution)
