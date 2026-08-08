
export class HomePage {

  constructor(page) {
    this.page = page;
   page.locator('#search_query_top');
    this.lnkMyAccount = page.locator("span:has-text('My Account')")
    this.lnkRegister = page.locator("a:has-text('Register')")
    this.lnkLogin = page.locator("a:has-text('Login')")
    this.txtSearch = page.locator("input[placeholder = 'Search']")
    this.btnSearch = page.locator(".btn.btn-default.btn-lg")
  }


  //validate homepage exists
  async isHomePageExists(){
    let title  =  await this.page.title();
    if(title){
      return  true;
    } 
    return false;
  }

  //Click on the my account link
  async clickMyAccount(){
    try{
      await this.lnkMyAccount.waitFor({ state: 'visible', timeout: 10000 });
      await this.lnkMyAccount.click();
    }catch (error){
      console.log("Exception occured while click on My Account Link");
      throw error;
      }
    
    }
  
  //Enter product name in the search box
    async enterProductName(productName){
    try{
      await this.txtSearch.waitFor({ state: 'visible', timeout: 10000 });
      await this.txtSearch.fill(productName)
    }catch(error){
      console.log("Exception occured while adding product");
      throw error;
    
    
    }

  }

  //click on the search button
  async clickSearchButton(){
    try{
      await this.btnSearch.waitFor({ state: 'visible', timeout: 10000 });
      await this.btnSearch.click();
    }catch(error){
      console.log("Exception occured while clicking on search button")
      throw error();
      
    };
    
  }
     async clickRegister(){
        try {
            await this.lnkRegister.waitFor({ state: 'visible', timeout: 10000 });
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }



}