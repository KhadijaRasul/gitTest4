import { CategoryPO } from '../../../page-objects/Settings/Category/category.po';
import { browser, ExpectedConditions } from 'protractor';
import { SharedLogic } from '../../../page-logic/Shared/shared.service';

const categoryPO = new CategoryPO();
const shared = new SharedLogic();

export class CategoryLogic {

    public async checkCategoryCreateFormHeader(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(categoryPO.getDrawerContainerHeaderOnCreateCategoryForm()), browser.params.waitTime);
        expect(await categoryPO.getDrawerContainerHeaderOnCreateCategoryForm().getText()).toBe("Create Equipment Category");
    }
    public async clickCaregoryCreateForm1stBarcode(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryPO.get1stBarcodeOnCreateCategoryForm()), browser.params.waitTime);
        await categoryPO.get1stBarcodeOnCreateCategoryForm().click();
    }
    public async checkCategoryCreateFormLabels(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryPO.getNameOnCreateCategoryForm()));
        expect(await categoryPO.getNameLabelOnCreateCategoryForm().getText()).toBe("Name*");
        expect(await categoryPO.getParentLabelOnCreateCategoryForm().getText()).toBe("Parent");
        expect(await categoryPO.getBarcodeHeaderOnCreateCategoryForm().getText()).toBe("Barcode Details");
        expect(await categoryPO.getBarcodeDescriptionOnCreateCategoryForm().getText()).toBe("Select Barcode\n(Support on both Android and IOS devices)");
        await browser.wait(ExpectedConditions.visibilityOf(categoryPO.getSaveButtonOnCreateCategoryForm()), browser.params.waitTime);
        expect(await categoryPO.getSaveButtonOnCreateCategoryForm().getText()).toBe("Save");
        await browser.wait(ExpectedConditions.visibilityOf(categoryPO.getCancelButtonOnCreateCategoryForm()), browser.params.waitTime);
        expect(await categoryPO.getCancelButtonOnCreateCategoryForm().getText()).toBe("Cancel");
    }
    public async clickCategoryCreateFormSaveButton(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryPO.getSaveButtonOnCreateCategoryForm()));
        await categoryPO.getSaveButtonOnCreateCategoryForm().click();
    }
    public async enterCategoryCreateFormCategoryName(eqCatName: string): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryPO.getNameOnCreateCategoryForm()), browser.params.waitTime);
        await (categoryPO.getNameOnCreateCategoryForm().sendKeys(eqCatName));
    }

    public async setCategoryFormName(eqCatName: string): Promise<void> {
        await this.checkCategoryCreateFormLabels();
        await this.enterCategoryCreateFormCategoryName(eqCatName);
        await this.clickCategoryCreateFormSaveButton();
    }
    public async setCategoryCreateFormCategoryWithNameAndBarCode(eqCatName: string): Promise<void> {
        await this.checkCategoryCreateFormLabels();
        await this.enterCategoryCreateFormCategoryName(eqCatName);
        await this.clickCaregoryCreateForm1stBarcode();
        await this.clickCategoryCreateFormSaveButton();
    }
    public async gobackFromCategoryCreateFormToCategoryList(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(categoryPO.getReturnToListOnCreateCategroyForm()), browser.params.waitTime);
        await categoryPO.getReturnToListOnCreateCategroyForm().click();
    }
    public async createCategoryFormCategoryWithName(eqCatName: string): Promise<void> {
        await this.checkCategoryCreateFormHeader();
        await this.setCategoryFormName(eqCatName);
        await shared.checkSharedToastMessage();
        await this.gobackFromCategoryCreateFormToCategoryList();
    }
    public async createCategoryFormCategoryNameAndBarCode(eqCatName: string): Promise<void> {
        await this.checkCategoryCreateFormHeader();
        await this.setCategoryCreateFormCategoryWithNameAndBarCode(eqCatName);
        await shared.checkSharedToastMessage();
        await this.gobackFromCategoryCreateFormToCategoryList();
    }
}