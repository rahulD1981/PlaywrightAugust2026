const { test, expect } = require('@playwright/test');


test('Find Duplicates in an array', async ({ page }) => {
const arrayNumbers = [1,2,2,3,4,5,5,6]
const duplicates = arrayNumbers.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicates);

});

test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes

test('Using for loop  Find Duplicates in an array', async ({ page }) => {
const arrayNumbers = [1,2,2,3,4,5,5,6]

for (let i = 0; i < arrayNumbers.length; i++) {
    for (let j = i + 1; j < arrayNumbers.length; j++) {
        if (arrayNumbers[i] === arrayNumbers[j]) {
            console.log(arrayNumbers[i]);
            break; // Prevents printing the same duplicate multiple times for this i
            
        }
    }  
}
});