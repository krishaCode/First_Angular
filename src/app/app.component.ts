import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponet } from "./login/login.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponet, DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Hello World';
  imgUrl:string ="C:\Users\KRISHAN\Desktop";
  isDisabled:boolean = false;
  arialabltex="This is button."
  colspan=2;

}
