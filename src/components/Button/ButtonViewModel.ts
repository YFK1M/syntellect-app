class ButtonViewModel {  
  text = '';
  callback = () => {};

  constructor(text: string, callback: () => void) {
    this.text = text;
    this.callback = callback;
  }
}

export default ButtonViewModel;