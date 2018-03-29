import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app';
import Togglable from './togglable'
import Togglable2 from './togglable2'


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, Togglable, Togglable2 ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);