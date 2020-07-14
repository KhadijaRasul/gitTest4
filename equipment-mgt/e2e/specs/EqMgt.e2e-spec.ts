import { browser } from 'protractor';
import { EquipmentLogic } from '../logics/page-logic/Equipment/equipment.service';
import { SharedLogic } from '../logics/page-logic/Shared/shared.service';
import { EquipmentListLogic } from '../logics/page-logic/Equipment/equipmentList.service';
import { SettingsLogic } from '../logics/page-logic/Settings/settings.service';
import { CategoryListLogic } from '../logics/page-logic/Settings/Category/categoryList.service';
import { CategoryLogic } from '../logics/page-logic/Settings/Category/category.service';
describe('V6 Equipment : ', async () => {
  const equipment = new EquipmentLogic();
  const equipmentList = new EquipmentListLogic();
  const shared = new SharedLogic();
  const settings = new SettingsLogic();
  const categoryList = new CategoryListLogic();
  const category = new CategoryLogic();
  let categoryTotalCount: number = 0;

  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.driver.manage().window().maximize();
    await browser.waitForAngularEnabled(true);
    await browser.get(browser.params.baseURL);
  });
  describe('on Equipment List View', () => {
  it('Test case1: Open equipment page', async () => {
    expect(await equipmentList.getListViewHeader()).toBe('Equipment');
  });
  it('Test case2: Check button, column headers, total record count, search bar  and pagination, footer in List View', async () => {
    await equipmentList.checkListViewButtonNames();
    await equipmentList.checkListViewColumnHeaders();
    await equipmentList.checkTotalRecordCount();
    await equipmentList.checkListViewSearchBarPresence();
    await equipmentList.getListViewFooter();
  });
  it('Test case 3: Equipment List Pagination', async () => {
    await equipmentList.paginationCheck(browser.params.defaultPageSize);
  } );
  });
 describe('on Equipment Category', () => {
   it('Test case4: Create and Delete Category with Name and barcode', async () => {
      await equipmentList.openSettings();
      await settings.checkSettingsHeader();
      await settings.clickSettingsCategoryTile();
      categoryTotalCount = await categoryList.checkCategoryListHeaderInfo();
      await categoryList.clickCategoryListCreateButton();
      await category.createCategoryFormCategoryNameAndBarCode(browser.params.category.categoryName);
      await categoryList.searchCategoryListwithName(browser.params.category.categoryName, categoryTotalCount);
      await categoryList.clickCategoryListOnActtion1stRecord();
      await settings.closeSettingsDrawer();
    });
  });
 describe('on Equipment', () => {
  it('Test case5: Create and cancel Equipment', async () => {
    await equipment.createAndCancelEq();
  });
  it('Test case6: Create and search for Equipment', async () => {
    let equipmentName: string = browser.params.equipment.equipmentName;
    await equipment.createAndSaveEq(equipmentName, browser.params.equipment.equipmentMake, browser.params.equipment.equipmentSerialNumber, browser.params.equipment.equipmentBarcode);
    await shared.checkSharedToastMessage();
    await equipmentList.searchListViewForCreatedEq(browser.params.equipment.equipmentName)
  });
});
});