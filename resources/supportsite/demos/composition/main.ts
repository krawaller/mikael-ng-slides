import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App } from './app';
import { Middle } from './middle';
import { Inner } from './inner';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ App, Middle, Inner ],
    bootstrap:    [ App ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
