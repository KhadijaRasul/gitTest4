import { ElementFinder, $} from 'protractor';
export class CategoryPO {
  private _name_CreateCategoryFrom: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form form input#name');
  private _nameLabel_CreateCategoryFrom: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form form label[for=name]');
  private _drawerContainer_Header_CreateCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form fiix-heading h1');
  private _parentNameLabel_CreatCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form form label[for=parent]');
  private _save_Button__CreatCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form div.button-container button.save-button.fiix-primary-button');
  private _cancel_Button__CreatCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form div.button-container button.button.transparent-button.fiix-button');
  private _drawerContainer_backToCatList_CreateCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) div.drawer-content-header-clickable')
  private _drawerContainer_1stBarcode_CreateCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form form div.barcodes-wrapper div[class~=barcode-selection]:nth-of-type(1) div.barcode-outline')
  private _drawerContainer_BarcodeSectionHeader_CreateCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form form div.form-controls-container.barcode-details-container > h2')
  private _drawerContainer_BarcodeSectionDescription_CreateCategoryForm: ElementFinder = $('div[class=cdk-global-overlay-wrapper]:nth-of-type(3) eq-equipment-category-form form div.form-controls-container.barcode-details-container > p')
  
  public getDrawerContainerHeaderOnCreateCategoryForm() {
    return this._drawerContainer_Header_CreateCategoryForm;
  }
  public getNameLabelOnCreateCategoryForm(): ElementFinder {
    return this._nameLabel_CreateCategoryFrom;
  }
  public getParentLabelOnCreateCategoryForm(): ElementFinder {
    return this._parentNameLabel_CreatCategoryForm;
  }
  public getNameOnCreateCategoryForm(): ElementFinder {
    return this._name_CreateCategoryFrom;
  }
  public getSaveButtonOnCreateCategoryForm(): ElementFinder {
    return this._save_Button__CreatCategoryForm;
  }
  public getCancelButtonOnCreateCategoryForm(): ElementFinder {
    return this._cancel_Button__CreatCategoryForm;
  }
  public getReturnToListOnCreateCategroyForm(): ElementFinder {
    return this._drawerContainer_backToCatList_CreateCategoryForm;
  }
  public get1stBarcodeOnCreateCategoryForm(): ElementFinder {
    return this._drawerContainer_1stBarcode_CreateCategoryForm;
  }
  public getBarcodeHeaderOnCreateCategoryForm(): ElementFinder {
    return this._drawerContainer_BarcodeSectionHeader_CreateCategoryForm;
  }
  public getBarcodeDescriptionOnCreateCategoryForm(): ElementFinder {
    return this._drawerContainer_BarcodeSectionDescription_CreateCategoryForm;
  }
}