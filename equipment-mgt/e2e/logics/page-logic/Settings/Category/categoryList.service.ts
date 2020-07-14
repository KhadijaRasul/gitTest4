import { CategoryListPO } from '../../../page-objects/Settings/Category/categoryList.po';
import { browser, ExpectedConditions } from 'protractor';
import { SharedLogic } from '../../Shared/shared.service';
import { SettingsPO } from '../../../page-objects/Settings/settings.po';

const categoryListPO = new CategoryListPO();
const shared = new SharedLogic();
const settingsPO = new SettingsPO();

export class CategoryListLogic {

    public async checkCategoryListHeader(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(categoryListPO.getDrawerContainerHeaderOnCatList()));
        expect(await categoryListPO.getDrawerContainerHeaderOnCatList().getText()).toBe("Equipment Categories");
    }
    public async checkCategoryListHeaderTotalCount(): Promise<number> {
        let categoryTotalCountText = await categoryListPO.getDrawerContainerHeaderTotalCountOnCatList().getText();
        let categoryTotalCountArray = categoryTotalCountText.split(" ");
        let categoryTotalCount = +categoryTotalCountArray[0];
        return categoryTotalCount;
    }
    public async clickCategoryListBackToSettings(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getBackToSettingsOnCatList()));
        await categoryListPO.getBackToSettingsOnCatList().click();
    }
    public async clickCategoryListCreateButton(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getCreateButtonOnCatList()), browser.params.waitTime);
        await categoryListPO.getCreateButtonOnCatList().click();
    }
    public async searchCategoryListwithName(eqCatName: string, eqCategoryCount: number): Promise<void> {
        await this.checkCategoryListHeader();
        let countAfterCategoryCreation = this.checkCategoryListHeaderTotalCount();
        expect(countAfterCategoryCreation).toBe(eqCategoryCount + 1)
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getSearchBarOnCatList()));
        let searchText = eqCatName.substring(0, 1);
        await categoryListPO.getSearchBarOnCatList().sendKeys(searchText);
        await browser.wait(ExpectedConditions.presenceOf(categoryListPO.getSearchIconClearOnCatList()));
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getSearchIconClearOnCatList()));
        searchText = eqCatName.substring(1, eqCatName.length);
        await categoryListPO.getSearchBarOnCatList().sendKeys(searchText);
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getSearchIconOnCatList()));
        await categoryListPO.getSearchIconOnCatList().click();
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getSearchResultNameCheckOnCatList()), browser.params.waitTime);
        expect(await categoryListPO.getSearchResultNameCheckOnCatList().getText()).toContain(eqCatName);
    }
    public async checkCategoryListHeaderInfo(): Promise<number> {
        await this.checkCategoryListHeader();
        let countCategory = await this.checkCategoryListHeaderTotalCount();
        return countCategory;
    }
    public async deleteCategoryList(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(categoryListPO.getActionDropDownDeleteOnCatList()));
        await browser.wait(ExpectedConditions.textToBePresentInElement(categoryListPO.getActionDropDownDeleteOnCatList(), "Delete"));
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getActionDropDownDeleteOnCatList()));
        await categoryListPO.getActionDropDownDeleteOnCatList().click();
        await shared.inteactWithSharedDeletedialog();
        await this.clickCategoryListBackToSettings();
        await browser.driver.wait(ExpectedConditions.stalenessOf(settingsPO.getNextDrawerSettings(2)), browser.params.waitTime);

    }
    public async clickCategoryListOnActtion1stRecord(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryListPO.getSearchResult1stRecordActionOnCatList()));
        await categoryListPO.getSearchResult1stRecordActionOnCatList().click();
        await this.deleteCategoryList();
    }
}