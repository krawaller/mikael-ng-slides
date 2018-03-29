import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app';
import { UnlessDirective } from './unless'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, UnlessDirective ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);