import { SettingsPO } from '../../page-objects/Settings/settings.po';
import { browser, ExpectedConditions } from 'protractor';
import { SharedPO } from '../../page-objects/Shared/shared.PO';

const settingsPO = new SettingsPO();
const sharedPO = new SharedPO();

export class SettingsLogic {

  public async checkSettingsHeader(): Promise<void> {
    await browser.driver.wait(ExpectedConditions.presenceOf(sharedPO.getDrawerContainerShared()), browser.params.waitTime)
    expect(await settingsPO.getHeaderSettings().getText()).toBe("Settings");
  }
  public async closeSettingsTextCheck(): Promise<void> {
    await browser.driver.wait(ExpectedConditions.visibilityOf(settingsPO.getCloseSettings()), browser.params.waitTime);
    await browser.driver.wait(ExpectedConditions.textToBePresentInElement(settingsPO.getCloseSettings(), "Close Settings"), browser.params.waitTime);
    expect(await settingsPO.getCloseSettings().getText()).toBe("Close Settings");
  }
  public async checkSettingsTiles(): Promise<void> {
    await browser.driver.wait(ExpectedConditions.visibilityOf(settingsPO.getCategoryTileSettings()), browser.params.waitTime)
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(settingsPO.getCategoryTileSettings()), browser.params.waitTime)
    expect(await settingsPO.getCategoryTileSettings().getText()).toBe("Equipment Categories");
    await browser.driver.wait(ExpectedConditions.visibilityOf(settingsPO.getStatusTileSettings()), browser.params.waitTime)
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(settingsPO.getStatusTileSettings()), browser.params.waitTime)
    expect(await settingsPO.getStatusTileSettings().getText()).toBe("Statuses");
  }
  public async checkSettingsForm(): Promise<void> {
    await this.closeSettingsTextCheck()
    await this.checkSettingsHeader();
    await this.checkSettingsTiles();
  }
  public async clickSettingsCategoryTile(): Promise<void> {
    await this.checkSettingsForm();
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(settingsPO.getCategoryTileSettings()), 10000)
    await settingsPO.getCategoryTileSettings().click();
  }
  public async closeSettingsDrawer(): Promise<void> {
    await this.checkSettingsForm();
    await browser.driver.wait(ExpectedConditions.stalenessOf(settingsPO.getNextDrawerSettings(2)), browser.params.waitTime);
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(settingsPO.getCloseSettings()), browser.params.waitTime * 3);
    await settingsPO.getCloseSettings().click();
    await browser.driver.wait(ExpectedConditions.stalenessOf(settingsPO.getNextDrawerSettings(1)), browser.params.waitTime);

  }
}