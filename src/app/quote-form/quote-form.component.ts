import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotes: string[]
  author: string;

  constructor() { }

  ngOnInit() {
    this.author = ''

    this.quotes = ['love is life', 'context is king'];
  }
  onClick() {
    this.quotes.unshift('quote');

  }
  onSubmit(quote) {
    console.log(quote);
    return false;
    this.quotes.push(quote)
  }
  deleteQuote(quote) {
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i] == quote) {
        this.quotes.splice(i, 1)
      }
    }
  }

}
