import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote:string[];

  constructor() {
    this.quote = ['The purpose of our lives is to be happy', 'You only live once, but if you do it right, once is enough', "Life is what happens when you're busy making other plans"]
  }
}
