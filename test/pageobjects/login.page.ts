import { ChainablePromiseElement } from "webdriverio";
import { assert } from "chai";
import Page from "./page";

class LoginPage extends Page {
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  // inputPassword = $("#password");

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get actualMessage() {
    return $("#flash");
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  //Open login Page
  public async openLoginPage() {
    await this.open("login");
  }

  //Check login message correct
  public async checkLoginMessage(expectedMessage: string) {
    //Using expect
    // await expect(this.actualMessage).toHaveTextContaining(expectedMessage);

    //Using Assert from Chai
    assert.equal((await this.actualMessage).getText(), expectedMessage);
  }
}

export default new LoginPage();
