import { by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
export class EquipmentPO {
 private _formLabels_CreatEqForm: ElementArrayFinder = $$('label.equipment-label');
  private _equipmentNameInput_CreatEqForm: ElementFinder = $('input#name');
  private _saveButton_CreatEqForm: ElementFinder = element(by.buttonText('Save'));
  private _cancelButton_CreatEqForm: ElementFinder = element(by.buttonText('Cancel'));
  private _requiredField_CreatEqForm: ElementFinder = $('span.required.required-fields');
  private _make_CreatEqForm: ElementFinder = $('input#make');
  private _serialNumber_CreatEqForm: ElementFinder = $('input#serial-number');
  private _barcode_CreatEqForm: ElementFinder = $('input#barcode');
  private _categoryAdd_CreatEqForm: ElementFinder = $('input#category + div > button');
  private _Category_1stRecord_CategoryListView: ElementFinder = $('mat-drawer div.drawer-content-body fiix-table table tbody tr:nth-of-type(1) > td:nth-of-type(1) fiix-radio-button');
  private _SaveButton_CategoryListView: ElementFinder = element(by.css('mat-drawer eq-category-picker div.button-container button.save-button.fiix-primary-button'));
  
  public getEquipmentLabelsOnCreateEqForm(): ElementArrayFinder {
    return this._formLabels_CreatEqForm;
  }
  public getNameInputOnCreatEqForm(): ElementFinder {
    return this._equipmentNameInput_CreatEqForm;
  }
  public getSaveButtonOnCreatEqForm(): ElementFinder {
    return this._saveButton_CreatEqForm;
  }
  public getCancelButtonOnCreatEqForm(): ElementFinder {
    return this._cancelButton_CreatEqForm;
  }
  public getRequiredFieldOnCreatEqForm(): ElementFinder {
    return this._requiredField_CreatEqForm;
  }
  public getMakeOnCreateEqForm(): ElementFinder {
    return this._make_CreatEqForm;
  }
  public getSerialNumberOnCreateEqForm(): ElementFinder {
    return this._serialNumber_CreatEqForm;
  }
  public getBarcodeOnCreateEqForm(): ElementFinder {
    return this._barcode_CreatEqForm;
  }
  public getAddButtonForCategoryOnCreateEqForm(): ElementFinder {
    return this._categoryAdd_CreatEqForm;
  }
  public getFirstRecordOnCategoryDrawer(): ElementFinder {
    return this._Category_1stRecord_CategoryListView;
  }
  public getSaveButtonOnCategoryDrawer(): ElementFinder {
    return this._SaveButton_CategoryListView;
  }
}