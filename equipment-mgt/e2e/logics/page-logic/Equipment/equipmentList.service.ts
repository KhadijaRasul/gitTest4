import { EquipmentListPO } from '../../page-objects/Equipment/equipmentList.po';
import { browser, ExpectedConditions } from 'protractor';

const equipmentListPO = new EquipmentListPO();

export class EquipmentListLogic {
  public async getListViewHeader(): Promise<string> {
    return await equipmentListPO.getHeadingOnListView().getText();
  }
  public async getListViewHeaderTotalEquipmentRecord(): Promise<number> {
    let equipmentTotalCountText = await equipmentListPO.getHeadingTotalCountOnListView().getText();
    let equipmentTotalCountArray = equipmentTotalCountText.split(" ");
    let equipmentHeaderTotalCount = +equipmentTotalCountArray[0];
    return equipmentHeaderTotalCount;
  }
  public async getListViewFooter(): Promise<void> {
    expect(await equipmentListPO.getCopyRightFooterOnListView().getText()).toBe('Copyright Fiix © 2020. All Rights Reserved');
    expect(await equipmentListPO.getPrivacyPolicyFooterOnListView().isDisplayed()).toBe(true);
  }
  public async checkListViewColumnHeaders(): Promise<void> {
    let columnHeaders: any = await equipmentListPO.getColumnHeadersOnListView()
    for (let columnNumber = 1; columnNumber < columnHeaders.length; columnNumber++) {
      if (columnNumber == 1) {
        expect(await columnHeaders[1].getText()).toBe('NAME');
      }
      else if (columnNumber == 2) {
        expect(await columnHeaders[2].getText()).toBe('CODE');
      }
      else if (columnNumber == 3) {
        expect(await columnHeaders[3].getText()).toBe('CATEGORY');
      }
      else if (columnNumber == 4) {
        expect(await columnHeaders[4].getText()).toBe('STATUS');
      }
      else if (columnNumber == 5) {
        expect(await columnHeaders[5].getText()).toBe('REASON');
      }
      else if (columnNumber == 6) {
        expect(await columnHeaders[6].getText()).toBe('MAKE');
      }
      else if (columnNumber == 7) {
        expect(await columnHeaders[7].getText()).toBe('SERIAL NUMBER');
      }
      else if (columnNumber == 8) {
        expect(await columnHeaders[8].getText()).toBe('BARCODE');
      }
      else if (columnNumber == 9) {
        expect(await columnHeaders[9].getText()).toBe('DATE CREATED');
      }
      else if (columnNumber == 10) {
        expect(await columnHeaders[10].getText()).toBe('ACTIONS');
      }
    }
  }
  public async checkListViewButtonNames(): Promise<void> {
    expect(await equipmentListPO.getCreateButtonOnListView().getText()).toBe('Create');
    expect(await equipmentListPO.getSettingButtonOnListView().getText()).toBe('Settings');
  }
  public async checkListViewSearchBarPresence(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(equipmentListPO.getSearchbarInputOnListView()));
    expect(await equipmentListPO.getSearchbarInputOnListView().isPresent()).toBe(true);
  }
  public async searchListViewForCreatedEq(eqName: string): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(equipmentListPO.getSearchbarInputOnListView()));
    await equipmentListPO.getSearchbarInputOnListView().sendKeys(eqName);
    await browser.wait(ExpectedConditions.elementToBeClickable(equipmentListPO.getSearchIconOnListView()));
    await equipmentListPO.getSearchIconOnListView().click();
    expect(await equipmentListPO.getSearchResultNameCheckOnListView().getText()).toBe(eqName);
    await browser.wait(ExpectedConditions.elementToBeClickable(equipmentListPO.getSearchIconClearOnListView()));
    await equipmentListPO.getSearchIconClearOnListView().click();
  }
  public async checkTotalRecordCount(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(equipmentListPO.getTotalRecordHeadingOnListView()));
    var totalInHeading = await equipmentListPO.getTotalRecordHeadingOnListView().getText();
    var totalInHeadingNumber = totalInHeading.split(" ")
    await browser.wait(ExpectedConditions.presenceOf(equipmentListPO.getTotalRecordPaginationOnListView()));
    var totalInPaginaion = await equipmentListPO.getTotalRecordPaginationOnListView().getText();
    var totalInPaginationNumber = totalInPaginaion.split(" ")
    expect(totalInHeadingNumber[0]).toEqual(totalInPaginationNumber[totalInPaginationNumber.length - 1]);
  }
  public async openSettings(): Promise<void> {
    await equipmentListPO.getSettingButtonOnListView().click();
  }
  public async get_ListView_recordsNumberShown(): Promise<string> {
    let equipmentRangeFullText = await equipmentListPO.getPageRangeOnListView().getText();
    let equipmentRangeText = equipmentRangeFullText.split("/");
    let equipmentRangeTextRecordNumbers = equipmentRangeText[0];
    return equipmentRangeTextRecordNumbers;
  }
  public async get_ListView_FooterTotalEquipmentRecord(): Promise<number> {
    let equipmentTotalCountText = await equipmentListPO.getPageRangeOnListView().getText();
    let equipmentTotalCountArray = equipmentTotalCountText.split("/");
    let equipmentFooterTotalCount = +equipmentTotalCountArray[1];
    return equipmentFooterTotalCount;
  }
  public async totalEqRecordNumber(): Promise<number> {
    let countOnTop = await this.getListViewHeaderTotalEquipmentRecord();
    let countOnBottom = await this.get_ListView_FooterTotalEquipmentRecord();
    expect(countOnTop).toBe(countOnBottom);
    return countOnBottom;
  }
  public async compare2Pages_EqRecordNumber(recordRange1stPage: string): Promise<void> {
    await this.checkListViewColumnHeaders();
    let recordRangelastPage: string = await this.get_ListView_recordsNumberShown();
    expect(recordRange1stPage).not.toBe(recordRangelastPage);
  }
  public async moveToNextPage(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(equipmentListPO.getNextPageArrowOnListView()));
    await browser.wait(ExpectedConditions.elementToBeClickable(equipmentListPO.getNextPageArrowOnListView()));
    await equipmentListPO.getNextPageArrowOnListView().click();
  }
  public async moveToPreviousPage(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(equipmentListPO.getPreviousPageArrowOnListView()));
    await browser.wait(ExpectedConditions.elementToBeClickable(equipmentListPO.getPreviousPageArrowOnListView()));
    await equipmentListPO.getPreviousPageArrowOnListView().click();
  }
  public async checkDefaultPageSize(defaultPageSize: string): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(equipmentListPO.getPageSizeOnListView()));
    expect(await equipmentListPO.getPageSizeOnListView().getText()).toBe(defaultPageSize);
  }
  public async findLastPageRecordCount(totalEquipmentCount: number, defaultPageSizeNumber: number): Promise<number> {
    let numberOfRecordOnLastPage = totalEquipmentCount % defaultPageSizeNumber;
    let lastPageNumber: number;
    if (numberOfRecordOnLastPage > 0) {
      lastPageNumber = Math.floor(totalEquipmentCount / defaultPageSizeNumber) + 1;
    }
    else {
      lastPageNumber = Math.floor(totalEquipmentCount / defaultPageSizeNumber);
    }
    return lastPageNumber;
  }

  public async jumpToDifferentPage(pageNumber: number): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(equipmentListPO.getPageJumpToLabelOnListView()));
    expect(await equipmentListPO.getPageJumpToLabelOnListView().getText()).toBe("Jump to page");
    await browser.wait(ExpectedConditions.visibilityOf(equipmentListPO.getPageJumpToLabelOnListView()));
    await browser.wait(ExpectedConditions.elementToBeClickable(equipmentListPO.getPageJumpToInputOnListView()));
    await equipmentListPO.getPageJumpToInputOnListView().sendKeys(pageNumber);
  }
  public async paginationCheck(defaultPageSize: string): Promise<void> {
    // check Default page size
    await this.checkDefaultPageSize(defaultPageSize);
    // finding last page number
    let totalEquipmentCount = await this.totalEqRecordNumber();
    let defaultPageSizeNumber = +defaultPageSize;
    // move pages only if there is more than 1
    if (totalEquipmentCount > defaultPageSizeNumber) {
      let numberOfRecordOnLastPage = totalEquipmentCount % defaultPageSizeNumber;
      let lastPageNumber = await this.findLastPageRecordCount(totalEquipmentCount, defaultPageSizeNumber)
      let recordRange1stPage: string = await this.get_ListView_recordsNumberShown();
      // jump to last page
      await this.jumpToDifferentPage(lastPageNumber);
      // compare page range between 1st and last page to ensure the move
      await this.compare2Pages_EqRecordNumber(recordRange1stPage);
      let rows: any = await equipmentListPO.getRowsOnListView();
      // compare last page record number
      if (numberOfRecordOnLastPage > 0) {
        expect(numberOfRecordOnLastPage).toEqual(rows.length);
      }
      let recordRangeLastPage: string = await this.get_ListView_recordsNumberShown();
      // move to 2nd last page
      await this.moveToPreviousPage();
      // compare page range between last and 2nd last page to ensure the move
      await this.compare2Pages_EqRecordNumber(recordRangeLastPage);
      let recordRange2ndLastPage: string = await this.get_ListView_recordsNumberShown();
      // move 1 page forward
      await this.moveToNextPage();
      // compare page range between last and 2nd last page to ensure the move
      await this.compare2Pages_EqRecordNumber(recordRange2ndLastPage);
    }
  }
}