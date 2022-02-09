import { Component, Input } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, "Edison", "Samm", "I love myself", "First Quote", new Date(2020, 3, 23)),
    new Quote(2, "Edison", "Samm", "I love myself", "Second Quote", new Date(390)),
    new Quote(3, "Edison", "Samm", "I love myself", "Third Quote", new Date(2010, 1, 3)),
    new Quote(4, "Edison", "Samm", "I love myself", "Fourth Quote", new Date(2000, 9, 3)),
  ];

}
