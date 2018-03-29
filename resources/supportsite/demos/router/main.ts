import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app';
import { HomeComponent } from './home';
import { ProductComponent } from './product';

import { routing } from './routing'

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, ProductComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
