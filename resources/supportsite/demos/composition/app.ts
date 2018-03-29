import { Component } from '@angular/core';

@Component({
  template: `<span>App <middle></middle></span>`,
  selector: 'app',
  styles: [':host /deep/ span { display: inline-block; border: 1px solid black; padding: 3px; }']
})
export class App {}