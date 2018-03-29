import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { finalAnswerToken, finalAnswerVal } from './dependency'

import { AppComponent } from './app';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ {provide: finalAnswerToken, useValue: finalAnswerVal} ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
