import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Dependency from './dependency'

import { AppComponent } from './app';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ Dependency ] // [ {provides: Dependency, useClass: Dependency} ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
