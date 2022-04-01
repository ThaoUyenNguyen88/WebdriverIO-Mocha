import DropdownPage from "../pageobjects/dropdown.page";

describe("dropdown test", () => {
  it("Testcase 1: Select 'Option 1' in dropdown", async () => {
    //Open homepage
    await browser.url("https://the-internet.herokuapp.com/");

    //click Checkbox link, then move to checkbox page
    const checkboxLink = $("=Dropdown");
    await (await checkboxLink).click();

    //select value form dropdown
    const dropdownBox = $("#dropdown");
    await dropdownBox.selectByVisibleText("Option 1");
    await browser.pause(3000);
  });
});
