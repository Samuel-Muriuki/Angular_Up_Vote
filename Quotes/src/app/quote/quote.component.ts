import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    {author:"Edison", name: "Samm", quote: "I love myself"},
    {author:"Edison", name: "Samm", quote: "I love myself"},
    {author:"Edison", name: "Samm", quote: "I love myself"},
    {author:"Edison", name: "Samm", quote: "I love myself"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
