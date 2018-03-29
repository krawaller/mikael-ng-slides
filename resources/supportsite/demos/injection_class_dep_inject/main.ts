import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Dependency from './dependency'
import Dependency2 from './dependency2'

import { AppComponent } from './app';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ Dependency, Dependency2 ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
