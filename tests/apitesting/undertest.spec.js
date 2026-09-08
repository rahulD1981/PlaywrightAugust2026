const { test, expect, request } = require('@playwright/test');
//first java script object
const Person = 
[   {
    name : "rahul",     age : 44,     address : {
                                            city : "Pune",      mob : 8007776124
                                                }

    },
    {
    name : "sagar",     age : 43,      address : {
                                            city : "Wardha",    mob : 9766223346
                                            }
    },

]
/////////////////////////////////////////
const orderPayLoad = 
{orders:
    [{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}

    ]
};
test('Object then Array then agaon object', async ({ page }) => {
    console.log(orderPayLoad.orders[0].country);
    console.log(orderPayLoad.orders[0].productOrderedId);
})


test('Under testingggggggg', async ({ page }) => {
    console.log(Person[1].name);
    console.log(Person[1].age);
    console.log("City Name is " + Person[1].address.city);
     console.log("City Name is " + Person[1].address.mob);
})

test('adding data to blank object', async ({ page }) => {
   let response = {};
    response.token = "tokenno100";
    console.log(response.token);
    console.log(Object.keys(response));
})
