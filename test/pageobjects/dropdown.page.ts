import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropdownPage extends Page {
  /**
   * define selectors using getter methods
   */

  public get dropdownLink() {
    return $("=Dropdown");
  }

  public get dropdownBox() {
    return $("#dropdown");
  }

  public async selectDropdownOption(option: string) {
    await this.dropdownBox.selectByVisibleText(option);
  }
}

export default new DropdownPage();
