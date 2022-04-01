describe("checkbox test", () => {
  it("Testcase 1: Checkbox can selected", async () => {
    //Open homepage
    await browser.url("https://the-internet.herokuapp.com/");

    //click Checkbox link, then move to checkbox page
    const checkboxLink = $("=Checkboxes");
    await (await checkboxLink).click();

    const checkBox1 = $("/html/body/div[2]/div/div/form/input[1]");
    const checkBox2 = $("/html/body/div[2]/div/div/form/input[2]");
    if (await checkBox1.isSelected()) {
      await browser.pause(3000);
    } else {
      await checkBox1.click();
      console.log("Check box 1 is selected");
    }
    if (await checkBox2.isSelected()) {
      console.log("Check box 2 is selected");
      await browser.pause(3000);
    } else {
      await checkBox2.click();
    }
    await browser.pause(9000);
  });
});
