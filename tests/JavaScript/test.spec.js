const { test, expect } = require('@playwright/test');

test('test under', async ({ page }) => {
const input = "a2b3c4";
let output = "";

for (let i = 0; i < input.length; i += 2) {
    const char = input[i];
    const count = Number(input[i + 1]);

    output += char.repeat(count); //in char var character is stored. repeat willrepat or print charcter nnumof times 
}

console.log(output);

});