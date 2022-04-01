import loginPage from "../pageobjects/login.page";

before(async () => {
  await loginPage.openLoginPage();
});

after(async () => {});

https: describe("Login test", () => {
  it("Testcase 1: Login with correct username and password", async () => {
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await loginPage.checkLoginMessage("You logged into a secure area!");
  });

  //EXCLUSIVE TESTS
  // it.only("Testcase 2: Login with incorrect username and correct password", async () => {
  it("Testcase 2: Login with incorrect username and correct password", async () => {
    await loginPage.login("incorrectUsername", "SuperSecretPassword!");
    await loginPage.checkLoginMessage("Your username is invalid!");
  });

  //INCLUSIVE TESTS
  it.skip("Testcase 3: Login with correct username and incorrect password", async () => {
    await loginPage.login("tomsmith", "incorrectPassword");
    await loginPage.checkLoginMessage("Your password is invalid!");
  });

  it("Testcase 4: Login with incorrect username and incorrect password", async () => {
    await loginPage.login("incorrectUsername", "incorrectPassword!");
    await loginPage.checkLoginMessage("Your username is invalid!");
  });

  it("Testcase 5: Login with empty username and empty password", async () => {
    await loginPage.login("", "");
    await loginPage.checkLoginMessage("Your username is invalid!");
  });
});
