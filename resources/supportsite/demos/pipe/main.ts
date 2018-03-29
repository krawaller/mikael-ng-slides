import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app';
import { McFaceIt } from './mcfaceit'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, McFaceIt ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
