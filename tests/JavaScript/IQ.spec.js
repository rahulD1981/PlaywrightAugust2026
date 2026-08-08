
const { test, expect } = require('@playwright/test');

test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes

test('Find Duplicates in an array', async ({ page }) => {
      const arrayNumbers = [1,2,2,3,4,5,5,6]
const duplicates = arrayNumbers.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicates);

///////////////////////////////////
//logic use k <i
const arr = [10, 20, 30, 20, 40, 50, 30, 60, 10];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            console.log(arr[i]);
            break; // Prevents printing the same duplicate multiple times for this i
        }
    }
}
});

test('Find Maximum number in an array', async ({ page }) => {
 let arrayNumbers = [11,2,2,3,4,5,5,6]
 const min = Math.min(...arrayNumbers)
console.log(min)
});

test('Find missing value in an array', async ({ page }) => {
const arr2 = [1,2,3,4,5,6,9]
      const minvalue = Math.min(...arr2)
      const maxValue = Math.max(...arr2)
    //const missValue = "";


    for(let i=minvalue;i<maxValue;i++){
        if(arr2.indexOf(i) < 0) {
          const missValue = i;
           console.log(missValue)  
        }z
    }

})
