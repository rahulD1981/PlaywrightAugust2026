class APIUtils {
  constructor(apiContext, loginPayload) {
    this.apiContext = apiContext;
    this.loginPayload = loginPayload;
    this.token = null;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/auth/login',
      {
        data: JSON.stringify(this.loginPayload),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://rahulshettyacademy.com',
          Referer: 'https://rahulshettyacademy.com/client/#/auth/login'
        }
      }
    );

    const loginResponseJson = await loginResponse.json();
    if (!loginResponse.ok() || !loginResponseJson.token) {
      throw new Error(`Login failed: ${loginResponse.status()} ${JSON.stringify(loginResponseJson)}`);
    }

    this.token = loginResponseJson.token;
    return this.token;
  }

  async getProductId() {
    const token = this.token || (await this.getToken());

    const productListResponse = await this.apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/product/get-all-products',
      {
        data: JSON.stringify({
          productName: '',
          minPrice: null,
          maxPrice: null,
          productCategory: [],
          productSubCategory: [],
          productFor: []
        }),
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://rahulshettyacademy.com',
          Referer: 'https://rahulshettyacademy.com/client/#/auth/login'
        }
      }
    );

    const productListJson = await productListResponse.json();
    if (!productListResponse.ok()) {
      throw new Error(`Get products failed: ${productListResponse.status()} ${JSON.stringify(productListJson)}`);
    }

    const productOrderedId = productListJson.data?.[0]?._id;
    if (!productOrderedId) {
      throw new Error(`No product found in response: ${JSON.stringify(productListJson)}`);
    }

    return productOrderedId;
  }

  async createOrder(orderPayload) {
    const token = this.token || (await this.getToken());

    const orderResponse = await this.apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/order/create-order',
      {
        data: JSON.stringify(orderPayload),
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://rahulshettyacademy.com',
          Referer: 'https://rahulshettyacademy.com/client/#/auth/login'
        }
      }
    );

    const orderResponseJson = await orderResponse.json();
    if (!orderResponse.ok()) {
      throw new Error(`Create order failed: ${orderResponse.status()} ${JSON.stringify(orderResponseJson)}`);
    }

    const orderId = orderResponseJson.orders?.[0];
    return {
      status: orderResponse.status(),
      token,
      orderId,
      response: orderResponseJson
    };
  }
}

module.exports = { APIUtils };