const { cy, el } = require('@faker-js/faker');
const { test, expect } = require('@playwright/test');

test('test under', async ({ page }) => {
    //Interview tips
    //Remember when to use 2 round brackers ((
    //function without name  = //const func = (el) => { }
    //for sorting array use sort done use reduce
    //Logic between 2 for loops llll   when 2nd for loop is ended then,If condition is executed
    //for suuming reduce methos is used with a+b
    //Very Imp : When you add a return work then java exists entirely for the function

    //logice in blank array if element from arr1 is not present not present not present then add it
    //hence in if condition we have not operator


    //logic : first take all non zero value and add to array. This way index will keep on increasing
    //now index lenght is of all non zero elements - ex3
    //next in while take the index value and and add all zeroes to this index value
    // while loop lgoic should inex < arr.length

const arr = [1, 1, 0, 1, 1, 1, 0, 1];

let count = 0;
let maxCount = 0;
  
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 1) {
        count++;

        if (count > maxCount) {
            maxCount = count;
        }

    } else {
        count = 0;
    }
}

console.log("Maximum consecutive ones:", maxCount);
});




