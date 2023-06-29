import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import Placeholder from './components/Placeholder';

import styles from './DialogTestWebPart.module.scss';

export interface IDialogTestWebPartProps {
}

export default class DialogTestWebPart extends BaseClientSideWebPart<IDialogTestWebPartProps> {

  private placeHolder: Placeholder;

  public render(): void {

    this.domElement.className = styles.dialogTest;
    this.domElement.appendChild(this.placeHolder.getPlaceholder())

  }

  protected onInit(): Promise<void> {
    this.placeHolder= new Placeholder();
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
