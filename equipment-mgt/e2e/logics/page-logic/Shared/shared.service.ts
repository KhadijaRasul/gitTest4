import { SharedPO } from '../../page-objects/Shared/shared.po';
import { browser, ExpectedConditions } from 'protractor';

const sharedPO = new SharedPO();

export class SharedLogic {

  public async checkSharedToastMassageAppearence(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(sharedPO.getToastMassageShared()), browser.params.waitTime * 3);
  }
  public async checkSharedToastMassageDisappearence(): Promise<void> {
    await browser.wait(ExpectedConditions.stalenessOf(sharedPO.getToastMassageShared()), browser.params.waitTime * 2);
  }
  public async checkSharedToastMessage(): Promise<void> {
    await this.checkSharedToastMassageAppearence();
    await this.checkSharedToastMassageDisappearence();
  }
  public async inteactWithSharedDeletedialog(): Promise<void> {
    await browser.wait(ExpectedConditions.invisibilityOf(await sharedPO.getOverlayPanelShared()));
    await browser.wait(ExpectedConditions.visibilityOf(await sharedPO.getDialogContainerShared()));
    await browser.wait(ExpectedConditions.visibilityOf(await sharedPO.getDialogContainerMessageShared()));
    expect(await sharedPO.getDialogContainerMessageShared().getText()).toBe('Are you sure you want to delete this category?');
    await browser.wait(ExpectedConditions.visibilityOf(await sharedPO.getDialogContainerCancelButtonShared()));
    expect(await sharedPO.getDialogContainerCancelButtonShared().getText()).toBe('Cancel');
    await browser.wait(ExpectedConditions.visibilityOf(await sharedPO.getDialogContainerDeleteButtonShared()));
    await browser.wait(ExpectedConditions.textToBePresentInElement(await sharedPO.getDialogContainerDeleteButtonShared(), 'Delete'));
    expect(await sharedPO.getDialogContainerDeleteButtonShared().getText()).toBe('Delete');
    await browser.wait(ExpectedConditions.elementToBeClickable(await sharedPO.getDialogContainerDeleteButtonShared()));
    await sharedPO.getDialogContainerDeleteButtonShared().click();
  }
}