import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app';
import Highlightable from './highlighter'


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, Highlightable ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);