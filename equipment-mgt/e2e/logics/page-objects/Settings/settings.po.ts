import { ElementFinder, $ } from 'protractor';
export class SettingsPO {

  private _settings_EqCategoryTile: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(1) eq-equipment-settings fiix-settings-tile#categories-tile');
  private _settings_EqStatusTile: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(1) eq-equipment-settings fiix-settings-tile#statuses-tile');
  private _setting_CloseSetting: ElementFinder = $('div.drawer-header-close-text')
  private _settings_Header: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(1) mat-drawer div.drawer-content-body fiix-heading h1');
  private nextDrawer(drawerNumber: number): ElementFinder {
    let _nextDrawerElement = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(' + drawerNumber + ')');
    return _nextDrawerElement;
  }

  public getCategoryTileSettings(): ElementFinder {
    return this._settings_EqCategoryTile;
  }
  public getStatusTileSettings(): ElementFinder {
    return this._settings_EqStatusTile;
  }
  public getCloseSettings(): ElementFinder {
    return this._setting_CloseSetting;
  }
  public getNextDrawerSettings(drawerNumber: number): ElementFinder {
    return this.nextDrawer(drawerNumber);
  }
  public getHeaderSettings(): ElementFinder {
    return this._settings_Header;
  }
}