import { makeAutoObservable } from 'mobx';
import ButtonViewModel from '../Button/ButtonViewModel';

class TextControlViewModel {  
  controlText = '';
  leftButtons = [] as ButtonViewModel[];
  rightButtons = [] as ButtonViewModel[];

  constructor() {
    makeAutoObservable(this);
  }

  setControlText(text: string) {
    this.controlText = text
  }

  setLeftButtons(buttons: ButtonViewModel[]) {
    this.leftButtons = buttons;
  }

  setRightButtons(buttons: ButtonViewModel[]) {
    this.rightButtons = buttons;
  }
}

export default TextControlViewModel;