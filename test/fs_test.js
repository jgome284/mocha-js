const assert = require('assert');
const fs = require('fs');
let path, str;

/*
Write tests with a teardown step to restore file contents to original setup. 
The teardown phase makes tests isolated by resetting the environment before the next test runs. 

This provides two key benefits:
- Changes to the environment caused by one test do not affect the other tests.
- Isolated tests can be executed in any order!
*/

describe('appendFileSync', () => {
  it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);

 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);

 });
});
