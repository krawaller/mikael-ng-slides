import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app';
import { ConfirmComponent } from './confirm';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ConfirmComponent ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
