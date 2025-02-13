import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponet } from "./login/login.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponet, DashBoardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Hello World';
  inputValue:string =''
  imgUrl:string ="C:\Users\KRISHAN\Desktop";
  isDisabled:boolean = false;
  arialabltex="This is button."
  colspan=2;
color:string='red';
isActive:boolean = false;
name:string='Krishan'
twoWayValue:string =''

buttonclicked() {
  console.log("Button clicked")
}

InputEvent(event: KeyboardEvent) {
if(event.key == "Enter"){
  console.log("Enter clicked")
}
  }

  KeyDownClick() {
    console.log("Enter clicked")
    }

    Krypressed(input:HTMLInputElement) {
      this.inputValue=input.value
      console.log(input.id)
      }

}

