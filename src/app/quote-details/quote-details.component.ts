import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  name: string

  //  votes: number = ;
  constructor() { }

  ngOnInit() {
    this.name = 'kasa'
    //this.votes = 0

  }
  voteUp() {
    this.votes += 1;
    return false;
    console.log('hello')
  }
  voteDown() {
    this.votes -= 1;
    return false;
  }
}
