import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  template: `<span>Detail</span>`,
  selector: 'detail'
})
class Detail {}

@Component({
  template: `<span>Complex <detail></detail></span>`,
  selector: 'complex',
})
class Complex {}

@NgModule({
  declarations: [Complex,Detail],
  exports: [Complex]
})
class GenModule {}

@Component({
  template: `<span>Root <complex></complex></span>`,
  selector: 'app',
  styles: [':host /deep/ span { display: inline-block; border: 1px solid black; padding: 3px; }']
})
class Root {}

@NgModule({
    imports:      [ BrowserModule, GenModule ],
    declarations: [ Root ],
    bootstrap:    [ Root ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
