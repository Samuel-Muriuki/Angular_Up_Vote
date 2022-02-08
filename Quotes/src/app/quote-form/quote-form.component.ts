import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("", "", "", "", new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(formInfo: any) {
    const tempItem: object = {
      author: formInfo.author,
      person: formInfo.person,
      detail: formInfo.detail
    }
    this.addQuote.emit(this.newQuote);
  }

  name: any;
  author: any;
  detail: any;
  NgModel: any;

  
  constructor() { }

  ngOnInit(): void {
  }

}
