import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  template: `
    <p>
      home Works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('Home component');
  }

}
