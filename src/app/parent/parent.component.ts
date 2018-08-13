import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  buttonStatus: string = "";
  inputText: string = "";

  constructor() { }

  onClick(){
    this.buttonStatus = 'button clicked!';
  }

  onKeyUp(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  onInputEnter(inputValue: string){
    this.inputText = inputValue;
  }

  onEnterKlicked(event){
 //   if(event.code === "Enter")
      this.inputText = event.target.value;
  }

}
