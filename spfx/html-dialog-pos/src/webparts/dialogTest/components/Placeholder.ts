import PlaceholderButton from './PlaceHolderButton';

import styles from '../DialogTestWebPart.module.scss';


export default class Placeholder {

  private _container: HTMLElement;

  private _btnShowDialog: HTMLButtonElement;
  private _btnSaveDialog: HTMLButtonElement;
  private _btnCancelDialog: HTMLButtonElement;
  private _elemOutput: HTMLOutputElement;

  private _dialog: HTMLDialogElement;

  constructor(content?: string) {

    // Button launch dialog
    this._btnShowDialog = document.createElement("button");
    this._btnShowDialog.innerHTML = "Show Dialog";
    this._btnShowDialog.addEventListener("click", this.showDialog.bind(this));

    // Button launch dialog
    this._btnSaveDialog = document.createElement("button");
    this._btnSaveDialog.innerHTML = "Save";
    this._btnSaveDialog.addEventListener("click", this.saveDialog);

    // Button launch dialog
    this._btnCancelDialog = document.createElement("button");
    this._btnCancelDialog.innerHTML = "Cancel Close";
    this._btnCancelDialog.addEventListener("click", this.cancelDialog);

    // The dialog content
    this._dialog = document.createElement("dialog");
    this._dialog.innerHTML = "<h1>This is just a fancy new Dialog</h1>";
    this._dialog.classList.add(styles.makeFullScreen);

    this._elemOutput = document.createElement("output");
    this._elemOutput.style.display = "block";

    this._dialog.appendChild(this.getPositionButtons());
    this._dialog.appendChild(this._btnSaveDialog);
    this._dialog.appendChild(this._btnCancelDialog);

    // a container to host buttona and dialog
    this._container = document.createElement("div");
    this._container.appendChild(this._btnShowDialog);
    this._container.appendChild(this._dialog);
    this._container.appendChild(this._elemOutput);

  }

  private setPosition = (event: Event): void => {
    
    let target = event.target as HTMLButtonElement;
    
    switch (target.innerText){
      case 'top':
        this._dialog.className = "";
        this._dialog.classList.add(styles.showTop);
        break;
      case 'left':
        this._dialog.className = "";
        this._dialog.classList.add(styles.showLeft);
        break;
      case 'bottom':
        this._dialog.className = "";
        this._dialog.classList.add(styles.showBottom);
        break;
      case 'right':
        this._dialog.className = "";
        this._dialog.classList.add(styles.showRight);
        break;
      case 'fullscreen':
        this._dialog.className = "";
        this._dialog.classList.add(styles.makeFullScreen);
        break;
      case 'reset':
        this._dialog.className = "";
        break;
      default:
        console.debug('No Actions found')
    }

  }

  private getPositionButtons(): HTMLElement {

    let _posContainer = document.createElement("div");
    
    _posContainer.classList.add(styles.cont)
    _posContainer.appendChild(
      PlaceholderButton.get('top', this.setPosition)
    );
    _posContainer.appendChild(
      PlaceholderButton.get('right', this.setPosition)
    );
    _posContainer.appendChild(
      PlaceholderButton.get('bottom', this.setPosition)
    );
    _posContainer.appendChild(
      PlaceholderButton.get('left', this.setPosition)
    );
    _posContainer.appendChild(
      PlaceholderButton.get('fullscreen', this.setPosition)
    );
    _posContainer.appendChild(
      PlaceholderButton.get('reset', this.setPosition)
    );

    return _posContainer;

  }

  public getPlaceholder(): HTMLElement {
    return this._container;
  }

  public showDialog = (event: Event): void => {

    (this._dialog as any).returnValue = undefined;
    (this._dialog as any).close();
    (this._dialog as any).showModal();

  }

  public saveDialog = (event: Event): void => {

    (this._dialog as any).close('Save Results');
    this._elemOutput.value = (this._dialog as any).returnValue;

  }

  public cancelDialog = (event: Event): void => {

    (this._dialog as any).close('Cancel Dialog');
    this._elemOutput.value = (this._dialog as any).returnValue;

  }

}