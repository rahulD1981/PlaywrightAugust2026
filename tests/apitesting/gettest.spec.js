const { test, expect, request } = require('@playwright/test');

test('API Get Request path parameter', async () => {
  const apiContext = await request.newContext();
  const bookingID = 2;

  try {
    const response = await apiContext.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe('OK');
    expect(response.headers()['content-type']).toContain('application/json');
    expect(response.headers()).toHaveProperty('content-length');

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody).toHaveProperty('firstname');
    expect(responseBody).toHaveProperty('lastname');
    expect(responseBody).toHaveProperty('totalprice');
    expect(responseBody).toHaveProperty('depositpaid');
    expect(responseBody).toHaveProperty('bookingdates');
    expect(responseBody.bookingdates).toHaveProperty('checkin');
    expect(responseBody.bookingdates).toHaveProperty('checkout');
    expect(responseBody.firstname).toBeTruthy();
    expect(responseBody.lastname).toBeTruthy();


  } finally {
    await apiContext.dispose();
  }
});

test('API Get Request path parameter', async () => {
  const apiContext = await request.newContext();
  const bookingID = 2;

})