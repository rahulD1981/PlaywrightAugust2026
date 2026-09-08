# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\test.spec.js >> Under testing
- Location: tests\apitesting\test.spec.js:4:1

# Error details

```
TypeError: Cannot read properties of undefined (reading '0')
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
  3  | 
  4  | test('Under testing', async ({ page }) => {
  5  | console.log(orderPayLoad.orders)    //this will print entire json object as it is.Note : array data only is printed not nameofarray
  6  | //example : [{ country: 'Cuba', productOrderedId: '67a8dde5c0d3e6622a297cc8' }]
  7  | 
  8  | //note whenever u r printing elements 0,1,2, then go by sequence.ex pauyload.orders.countryname
  9  | console.log(orderPayLoad.orders[0].country)
  10 | console.log(orderPayLoad.orders[0].productOrderedId)
  11 | 
  12 | //store the array first and then print
  13 | const {orders} = orderPayLoad.orders;
> 14 | console.log(orders[0].country);
     |                   ^ TypeError: Cannot read properties of undefined (reading '0')
  15 | console.log(orders[0].productOrderedId);
  16 | 
  17 | })
  18 | 
  19 | 
```