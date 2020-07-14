import { by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
export class EquipmentListPO {
  private _heading_EqListView: ElementFinder = $('fiix-heading > h1.ng-star-inserted');
  private _headingoTotalCount_EqListView: ElementFinder = $('fiix-heading > span[class~=heading-total]');
  private _columnHeaders_EqListView: ElementArrayFinder = $$('th[role="columnheader"] > div');
  private _createButton_EqListView: ElementFinder = element(by.buttonText('Create'));
  private _settingButton_EqListView: ElementFinder = $('button.settings-button.fiix-secondary-button');
  private _searchBarInput_EqListView: ElementFinder = element(by.css('fiix-search-bar input'));
  private _searchIconStartSearch_EqListView: ElementFinder = $('fiix-search-bar fiix-icon[name="search"]');
  private _searchIconClear_EqListView: ElementFinder = $('fiix-search-bar fiix-icon[name="cross"]');
  private _totaRecord_Heading_EqListView: ElementFinder = $('span.heading-total.ng-star-inserted');
  private _totalRecord_Pagination_EqListView: ElementFinder = $('div.mat-paginator-range-label');
  private _footer_CopyRight_EqListView: ElementFinder = $('span.fiix-footer-copyright');
  private _footer_PrivacyPolicy_EqListView: ElementFinder = $('span.fiix-footer-agreements');
  private _pageSize_EqListView: ElementFinder = $('fiix-paginator mat-form-field mat-select div[class~=mat-select-value] span[class~=mat-select-value-text]');
  private _pageSizeDropDown_EqListView: ElementFinder = $('fiix-paginator mat-form-field mat-select div[class~=mat-select-arrow]');
  private _pageSizeLabel_EqListView: ElementFinder = $('fiix-paginator div.mat-paginator-container div.mat-paginator-page-size-label');
 // private _pageSizeDropDownOptions_EqListView: ElementArrayFinder = $$('div.cdk-overlay-container span.mat-option-text');
 private _pageSizeDropDownOptions_EqListView: ElementArrayFinder = $$('div.cdk-overlay-container mat-option');
 private _pageRange_EqListView: ElementFinder = $('fiix-paginator div.mat-paginator-range-actions div.mat-paginator-range-label');
  private _pagePreviousPageArrow_EqListView: ElementFinder = $('fiix-paginator div.mat-paginator-range-actions button[class~=mat-paginator-navigation-previous]');
  private _pageNextPageArrow_EqListView: ElementFinder = $('fiix-paginator div.mat-paginator-range-actions button[class~=mat-paginator-navigation-next]');
  private _pageJumptoInput_EqListView: ElementFinder = $('fiix-paginator div#pageInput input[class~=pageNumberField]');
  private _pageJumptoLabel_EqListView: ElementFinder = $('fiix-paginator div#pageInput label');
  private _numberOfRow_EqListView: ElementArrayFinder=$$('fiix-table tbody[role=rowgroup] tr');
  private getValueFromRowColumn(row:number, column: number): ElementFinder {
    let _value_fromCell: ElementFinder = $('fiix-table tbody tr:nth-of-type('+row+') > td:nth-of-type('+column+')');
   return _value_fromCell;
  }
  public getHeadingOnListView(): ElementFinder {
    return this._heading_EqListView;
  }
  public getHeadingTotalCountOnListView(): ElementFinder {
    return this._headingoTotalCount_EqListView;
  }
  public getColumnHeadersOnListView(): ElementArrayFinder {
    return this._columnHeaders_EqListView;
  }
  public getCreateButtonOnListView(): ElementFinder {
    return this._createButton_EqListView;
  }
  public getSettingButtonOnListView(): ElementFinder {
    return this._settingButton_EqListView;
  }
  public getSearchbarInputOnListView(): ElementFinder {
    return this._searchBarInput_EqListView;
  }
 public getSearchIconOnListView(): ElementFinder {
    return this._searchIconStartSearch_EqListView;
  }
  public getSearchIconClearOnListView(): ElementFinder {
    return this._searchIconClear_EqListView;
  }
  public getSearchResultNameCheckOnListView(): ElementFinder {
    return this.getValueFromRowColumn(1,2);
  }
  public getTotalRecordHeadingOnListView(): ElementFinder {
    return this._totaRecord_Heading_EqListView;
  }
  public getTotalRecordPaginationOnListView(): ElementFinder {
    return this._totalRecord_Pagination_EqListView;
  }
  public getCopyRightFooterOnListView(): ElementFinder {
    return this._footer_CopyRight_EqListView;
  }
  public getPrivacyPolicyFooterOnListView(): ElementFinder {
    return this._footer_PrivacyPolicy_EqListView;
  }
  public getPageSizeOnListView(): ElementFinder {
    return this._pageSize_EqListView;
  }
  public getPageSizeDropDownOnListView(): ElementFinder {
    return this._pageSizeDropDown_EqListView;
  }
  public getPageSizeLabelOnListView(): ElementFinder {
    return this._pageSizeLabel_EqListView;
  }
  public getPageSizeDropDownOptions_ListView(): ElementArrayFinder {
    return this._pageSizeDropDownOptions_EqListView;
  }
  public getPageRangeOnListView(): ElementFinder {
    return this._pageRange_EqListView;
  }
  public getNextPageArrowOnListView(): ElementFinder {
    return this._pageNextPageArrow_EqListView;
  }
  public getPreviousPageArrowOnListView(): ElementFinder {
    return this._pagePreviousPageArrow_EqListView;
  }
  public getPageJumpToLabelOnListView(): ElementFinder {
    return this._pageJumptoLabel_EqListView;
  }
  public getPageJumpToInputOnListView(): ElementFinder {
    return this._pageJumptoInput_EqListView;
  }
  public getRowsOnListView(): ElementArrayFinder {
    return this._numberOfRow_EqListView;
  }

}