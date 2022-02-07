import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    {author:"Edison", name: "Samm", quote: "I love myself", detail: "First Quote"},
    {author:"Edison", name: "Samm", quote: "I love myself", detail: "Second Quote"},
    {author:"Edison", name: "Samm", quote: "I love myself", detail: "Third Quote"},
    {author:"Edison", name: "Samm", quote: "I love myself", detail: "Fourth Quote"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
