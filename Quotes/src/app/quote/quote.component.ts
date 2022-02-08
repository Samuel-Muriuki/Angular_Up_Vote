import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote("Edison", "Samm", "I love myself", "First Quote"),
    new Quote("Edison", "Samm", "I love myself", "Second Quote"),
    new Quote("Edison", "Samm", "I love myself", "Third Quote"),
    new Quote("Edison", "Samm", "I love myself", "Fourth Quote"),
  ]


  toggleDetails(index: any) {
    this.quote[index].showDetail = !this.quote[index].showDetail;
  }


  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quote.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
