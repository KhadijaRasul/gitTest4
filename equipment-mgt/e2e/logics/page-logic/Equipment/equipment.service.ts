import { EquipmentPO } from '../../page-objects/Equipment/equipment.po';
import { browser, ExpectedConditions } from 'protractor';
import { EquipmentListPO } from '../../page-objects/Equipment/equipmentList.po';
import { SharedPO } from '../../page-objects/Shared/shared.po';

const equipmentPO = new EquipmentPO();
const equipmentListPO = new EquipmentListPO();
const sharedPO = new SharedPO();

export class EquipmentLogic {

  public async checkCreateEqFormLabels(): Promise<void> {
    let labels: any = await equipmentPO.getEquipmentLabelsOnCreateEqForm();
    for (let labelNumber = 0; labelNumber < labels.length; labelNumber++) {
      if (labelNumber == 0) {
        expect(await labels[0].getText()).toBe('Name*');
      }
      else if (labelNumber == 1) {
        expect(await labels[1].getText()).toBe('Code');
      }
      else if (labelNumber == 2) {
        expect(await labels[2].getText()).toBe('Criticality');
      }
      else if (labelNumber == 3) {
        expect(await labels[3].getText()).toBe('Description');
      }
      else if (labelNumber == 4) {
        expect(await labels[4].getText()).toBe('Category');
      }
      else if (labelNumber == 5) {
        expect(await labels[5].getText()).toBe('Equipment Location');
      }
      else if (labelNumber == 6) {
        expect(await labels[6].getText()).toBe('Address');
      }
      else if (labelNumber == 7) {
        expect(await labels[7].getText()).toBe('Longitude');
      }
      else if (labelNumber == 8) {
        expect(await labels[8].getText()).toBe('Latitude');
      }
      else if (labelNumber == 9) {
        expect(await labels[9].getText()).toBe('Account');
      }
      else if (labelNumber == 10) {
        expect(await labels[10].getText()).toBe('Charge Department');
      }
      else if (labelNumber == 11) {
        expect(await labels[11].getText()).toBe('Make');
      }
      else if (labelNumber == 12) {
        expect(await labels[12].getText()).toBe('Model');
      }
      else if (labelNumber == 13) {
        expect(await labels[13].getText()).toBe('Serial Number');
      }
      else if (labelNumber == 14) {
        expect(await labels[14].getText()).toBe('UNSPC Code');
      }
      else if (labelNumber == 15) {
        expect(await labels[15].getText()).toBe('Barcode');
      }
      else if (labelNumber == 16) {
        expect(await labels[16].getText()).toBe('Notes');
      }
    }
  }
  public async addCreateEqFormCategory(): Promise<void> {
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(equipmentPO.getAddButtonForCategoryOnCreateEqForm()), browser.params.waitTime)
    await equipmentPO.getAddButtonForCategoryOnCreateEqForm().click();
    await browser.driver.wait(ExpectedConditions.presenceOf(sharedPO.getDrawerContainerShared()), browser.params.waitTime)
    expect(await sharedPO.getDrawerContainerHeaderShared().getText()).toBe("Equipment Categories");
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(equipmentPO.getFirstRecordOnCategoryDrawer()), browser.params.waitTime)
    await equipmentPO.getFirstRecordOnCategoryDrawer().click();
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(equipmentPO.getSaveButtonOnCategoryDrawer()), browser.params.waitTime)
    await equipmentPO.getSaveButtonOnCategoryDrawer().click();

  }
  public async clickCreateEqFormCancelButton(): Promise<void> {
    await browser.driver.wait(ExpectedConditions.elementToBeClickable(equipmentPO.getCancelButtonOnCreatEqForm()), browser.params.waitTime)
    await equipmentPO.getCancelButtonOnCreatEqForm().click();
  }
  public async setAndSaveCreateEqFormNameEq(eqName: string, eqMake: string, eqSerialNumber: string, eqBarcode: string): Promise<void> {
    await equipmentPO.getNameInputOnCreatEqForm().sendKeys(eqName);
    await equipmentPO.getMakeOnCreateEqForm().sendKeys(eqMake);
    await equipmentPO.getSerialNumberOnCreateEqForm().sendKeys(eqSerialNumber);
    await equipmentPO.getBarcodeOnCreateEqForm().sendKeys(eqBarcode);
    await this.addCreateEqFormCategory();
    await equipmentPO.getSaveButtonOnCreatEqForm().click();
  }
  public async createAndCancelEq(): Promise<void> {
    await equipmentListPO.getCreateButtonOnListView().click();
    expect(await equipmentPO.getRequiredFieldOnCreatEqForm().getText()).toBe('*Required Fields')
    await this.checkCreateEqFormLabels();
    await this.clickCreateEqFormCancelButton();
  }
  public async createAndSaveEq(eqName: string, eqMake: string, eqSerialNumber: string, eqBarcode: string): Promise<void> {
    await equipmentListPO.getCreateButtonOnListView().click();
    expect((await equipmentPO.getRequiredFieldOnCreatEqForm()).getText()).toBe('*Required Fields')
    await this.checkCreateEqFormLabels();
    await this.setAndSaveCreateEqFormNameEq(eqName, eqMake, eqSerialNumber, eqBarcode);
  }
}