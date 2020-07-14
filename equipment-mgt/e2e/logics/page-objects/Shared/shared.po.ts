import { ElementFinder, $ } from 'protractor';
export class SharedPO {
  private _drawerContainer: ElementFinder = $('mat-drawer');
  private _drawerContainer_Header: ElementFinder = $('mat-drawer[class~=drawer] fiix-heading h1');
  private _drawerContainer_close: ElementFinder = $('div.drawer-header-close-text');
  private _toastMessageText: ElementFinder = $('span.fiix-msgbar-text');
  private _toastMessageText_drawer: ElementFinder = $('snack-bar-container > fiix-message-bar')
  private _overlayPane: ElementFinder = $('div#cdk-overlay-4');
  private _dialogContainer: ElementFinder = $('div.cdk-overlay-pane.fiix-dialog-panel mat-dialog-container');
  private _dialogContainer_Message: ElementFinder = $('div.cdk-overlay-pane.fiix-dialog-panel mat-dialog-container fiix-dialog-content p');
  private _dialogContainer_CancelButton: ElementFinder = $('div.cdk-overlay-pane.fiix-dialog-panel mat-dialog-container fiix-dialog-actions button#cancel-button');
  private _dialogContainer_DeletelButton: ElementFinder = $('div.cdk-overlay-pane.fiix-dialog-panel mat-dialog-container fiix-dialog-actions button#delete-dialog-button');

  public getToastMassageShared(): ElementFinder {
    return this._toastMessageText_drawer;
  }
  public getToastMassageTextShared(): ElementFinder {
    return this._toastMessageText;
  }
  public getDrawerContainerShared(): ElementFinder {
    return this._drawerContainer;
  }
  public getDrawerContainerHeaderShared(): ElementFinder {
    return this._drawerContainer_Header;
  }
  public getDrawerContainerClosedShared(): ElementFinder {
    return this._drawerContainer_close;
  }
  public getDialogContainerShared(): ElementFinder {
    return this._dialogContainer;
  }
  public getDialogContainerMessageShared(): ElementFinder {
    return this._dialogContainer_Message;
  }
  public getDialogContainerCancelButtonShared(): ElementFinder {
    return this._dialogContainer_CancelButton;
  }
  public getDialogContainerDeleteButtonShared(): ElementFinder {
    return this._dialogContainer_DeletelButton;
  }
  public getOverlayPanelShared(): ElementFinder {
    return this._overlayPane;
  }
}