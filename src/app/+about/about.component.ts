import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  template: `
    <p>
      about Works!
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('About component');
  }

}
