import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  name: string
  constructor() { }

  ngOnInit() {
    this.name = ''
    this.votes = 0;

  }
  voteUp(): boolean {
    this.votes += 1;
    return false;

  }
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }
}
