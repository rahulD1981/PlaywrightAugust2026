const { test, expect, request } = require('@playwright/test');
const orderPayLoad = 
{orders:
    [
        {
        country:"Cuba",
        productOrderedId:"67a8dde5c0d3e6622a297cc8"
        }
    ]
};

test('Under testing', async ({ page }) => {
console.log(orderPayLoad.orders)    //this will print entire json object as it is.Note : array data only is printed not nameofarray
//example : [{ country: 'Cuba', productOrderedId: '67a8dde5c0d3e6622a297cc8' }]

//note whenever u r printing elements 0,1,2, then go by sequence.ex pauyload.orders.countryname
console.log(orderPayLoad.orders[0].country)
console.log(orderPayLoad.orders[0].productOrderedId)

//store the array first and then print
const {orders} = orderPayLoad;
console.log(orders[0].country);
console.log(orders[0].productOrderedId);

//for of
for( const order of orderPayLoad.orders){
    console.log("Country name is " + order.country);
    console.log("Order name is " + order.productOrderedId);

}
//for each
orderPayLoad.orders.forEach(el=>{
    console.log("----" + el.country);
    console.log("----" + el.productOrderedId);
})

})

