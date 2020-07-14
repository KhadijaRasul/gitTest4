import { by, element, ElementFinder, $ } from 'protractor';
export class CategoryListPO {
  private _drawerContainer_Header_CategoryList: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-heading h1');
  private _drawerContainer_HeaderTotalCount_CategoryList: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-heading span.heading-total.ng-star-inserted');
  private _drawerContainer_CreateButton_CategoryList: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list button.create-button.fiix-button');
  private _drawerContainer_searchBox_CategoryList: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-search-bar input[id^="mat-input-"]');
  private _drawerContainer_searchIconStartSearch_CategoryList: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-search-bar fiix-icon[name="search"]');
  private _drawerContainer_searchIconClear_CategoryList: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-search-bar fiix-icon[name="cross"]');
  private _drawerContainer_actionDropDown_Delete: ElementFinder = $("div.cdk-overlay-connected-position-bounding-box button[class~=delete-button]");
  private _drawerContainer_categoryList_close: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) div.drawer-content-header div.drawer-header-close-text');
  private getCellForActionOnCatList(row:number, column: number): ElementFinder {
    let _actionCell = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-table table tbody tr:nth-of-type('+row+') > td:nth-of-type('+column+') fiix-icon[class~=ellipses]');
    return _actionCell;
  }
  private getCellForNameOnCatList(row:number, column: number): ElementFinder {
    let _nameCell = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(2) eq-category-list fiix-table table tbody tr:nth-of-type('+row+') > td:nth-of-type('+column+')');
    return _nameCell;
  }
  
  public getDrawerContainerHeaderOnCatList(): ElementFinder {
    return this._drawerContainer_Header_CategoryList;
  }
  public getDrawerContainerHeaderTotalCountOnCatList(): ElementFinder {
    return this._drawerContainer_HeaderTotalCount_CategoryList;
  }
  public getCreateButtonOnCatList(): ElementFinder {
    return this._drawerContainer_CreateButton_CategoryList;
  }
  public getSearchBarOnCatList(): ElementFinder {
    return this._drawerContainer_searchBox_CategoryList;
  }
  public getSearchIconOnCatList(): ElementFinder {
    return this._drawerContainer_searchIconStartSearch_CategoryList;
  }
  public getSearchIconClearOnCatList(): ElementFinder {
    return this._drawerContainer_searchIconClear_CategoryList;
  }
  public getSearchResultNameCheckOnCatList(): ElementFinder {
   return this.getCellForNameOnCatList(1,2);
  }
  public getSearchResult1stRecordActionOnCatList(): ElementFinder {
    return this.getCellForActionOnCatList(1,5);
  }
  public getActionDropDownDeleteOnCatList(): ElementFinder {
    return this._drawerContainer_actionDropDown_Delete;
  }
  public getBackToSettingsOnCatList(): ElementFinder {
    return this._drawerContainer_categoryList_close;
  }
}