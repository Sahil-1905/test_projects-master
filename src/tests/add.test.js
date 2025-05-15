const add = require('../functions/add');

//this is a test case
test('Add 2 + 2 to equal 4', () =>{
    expect (add(2, 2)).toBe(4);
});