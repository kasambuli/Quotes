import { Component, OnInit } from '@angular/core';
import { Votes } from '../votes'
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  name: string
  votesup: number;
  votesdown: number;
  constructor() { }

  ngOnInit() {

    this.votesup = 0;
    this.votesdown = 0;
  }
  //   function voteUp(): boolean; {
  //   this.votesup++;
  //
  //
  //
  // }
  // function voteDown(): boolean; {
  //   this.votesdown--;
  //
  //
  // }
  //   };
  // }
}
