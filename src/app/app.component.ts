import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  course='javascript'
  image="https://i.pinimg.com/564x/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg"

  goBack(): void {}

  msg:any="my message"
}
