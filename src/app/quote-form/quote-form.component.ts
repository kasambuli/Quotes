import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  author: string = '';
  onSubmit() {

  }
  constructor() { }

  ngOnInit() {
    this.author = 'cynthia'
    console.log(author);
  }

}
