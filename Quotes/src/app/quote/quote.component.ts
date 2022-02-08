import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  style: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote("Edison", "Samm", "I love myself", "First Quote", new Date(2020, 3, 23)),
    new Quote("Edison", "Samm", "I love myself", "Second Quote", new Date(390)),
    new Quote("Edison", "Samm", "I love myself", "Third Quote", new Date(2010, 1, 3)),
    new Quote("Edison", "Samm", "I love myself", "Fourth Quote", new Date(2000, 9, 3)),
  ];

  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.completeDate = new Date(quote.completeDate) 
    this.quote.push(quote)
  }

  toggleDetails(index: any) {
    this.quote[index].showDetail = !this.quote[index].showDetail;
  }


  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quote.splice(index, 1);
    }
  }

  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm("Do you want to delete ${this.quote[index].author}?")

      if (toDelete) {
        this.quote.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
