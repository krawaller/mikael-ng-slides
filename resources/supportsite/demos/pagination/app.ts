import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    Items per page: <input type="range" min="1" [max]="quotes.length" [(ngModel)]="quotesPerPage"/> (1-{{quotes.length}}) {{quotesPerPage}} <br/>
    Current page: <input type="range" min="1" [max]="lastPage" [(ngModel)]="currentPage"/> (1-{{lastPage}}) {{currentPage}} <br/>
    Add quote: <quoteform (submission)="addQuote($event)"></quoteform>
    <div *ngFor="let quote of (quotes | pagination : quotesPerPage : currentPage)">
      <quote [quote]="quote"></quote>
    </div>
  `
})
export class AppComponent {
  quotes = ['Carpe Noctem','Alea Jacta Est','Sic Itur Ad Astra']
  quotesPerPage: number = 3
  _currentPage: number = 1
  get currentPage() { return Math.min(this._currentPage,this.lastPage); }
  set currentPage(num:number) { this._currentPage = num; }
  get lastPage() { return Math.ceil(this.quotes.length/this.quotesPerPage) }
  addQuote(q:string){
    this.quotes.push(q)
    this.currentPage = this.lastPage
  }
}