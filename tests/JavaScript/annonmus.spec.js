const { test, expect } = require('@playwright/test');

//Annoynmus function exmaple1
test('Annonumus functions', async ({ page }) => {
    let arr = [1, 2, 3, 4, 5];
    let temp = arr.filter(s=>s>4);  
    console.log("temp: " + temp);

});

//Annoynmus function exmaple 2

//Annoynmus function exmaple1
test('Annonumus functions ex 2', async ({ page }) => {
    let arr = [1, 2, 3, 4, 5];
    
   let gretthan5 =  arr.filter((temp)=>{
       return temp>4; // Here you have to perform some operation 
    });

    console.log("Greaer than 4 are -- " + gretthan5);

});