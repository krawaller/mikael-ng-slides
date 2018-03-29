import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app';
import Pagination from './pagination'
import QuoteForm from './quoteform'
import Quote from './quote'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Pagination, Quote, QuoteForm ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);