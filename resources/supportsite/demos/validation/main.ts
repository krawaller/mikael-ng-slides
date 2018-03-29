import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app';
import { NoCurses }      from './nocurses';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, NoCurses ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
