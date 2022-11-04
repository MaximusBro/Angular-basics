import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Dynamic title"
  number: number = 53;
  arr = [1,2,3];
  obj = {a:1, b:{c:2}}

  img ="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"

  inputValue: string = ""

  constructor() {
    setTimeout(() =>{
      console.log("Timeout is over. Time switch from react to Angular!")
      this.img ="https://angular.io/assets/images/logos/angular/angular.svg"
    }, 3000 )


  }
  onClick() {
      console.log("click")
  }
  onInput(event:KeyboardEvent){
    console.log("Event", (<HTMLInputElement>event.target).value);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  onBlur(str: string) {
  this.inputValue = str;
  }
}
