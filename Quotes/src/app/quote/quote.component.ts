import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, "Edison", "Samm", "I love myself", "First Quote", new Date(2020, 3, 23)),
    new Quote(2, "Edison", "Samm", "I love myself", "Second Quote", new Date(390)),
    new Quote(3, "Edison", "Samm", "I love myself", "Third Quote", new Date(2010, 1, 3)),
    new Quote(4, "Edison", "Samm", "I love myself", "Fourth Quote", new Date(2000, 9, 3)),
  ];

  completeDate!: number;
  preNum!:number
  lastNum!:number
  counter!: number

  addNewQuote(quote: any) {
    let quotelength = this.quotes.length;
    quote.id = quotelength + 1;
    quote.completeDate = new Date(quote.completeDate) 
    this.quotes.push(quote)
  }


  deleteQuote(isDelete: any, index: any) {
    if (isDelete) {
      let toDelete = confirm(`Do you want to delete ${this.quotes[index].author}?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index: any) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }


  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  upvote(i: number) {
    this.quotes[i].upvotes+=1
  }

  downvote(i: number) {
    this.quotes[i].downvotes+=1
  }

  toDelete(i: number) {
    this.quotes.splice(i, 1)
  }

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
