import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app.ts';
import { Hero }    from './hero.ts';
import Submission from './submission.ts'
import Heroform from './heroform.ts'


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Submission, Heroform ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);