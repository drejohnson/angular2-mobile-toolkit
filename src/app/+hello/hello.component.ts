import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  template: `
  <p>
    hello works!
  </p>
  <h1>App is Fully Rendered</h1>
  `,
  styles: []
})
export class HelloComponent {

  constructor() {}

  ngOnInit() {
    console.log('Hello component');
  }

}
