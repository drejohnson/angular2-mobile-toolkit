import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <header>
      <h1 class="brand">
        <a [routerLink]="['/']">{{ title }}</a>
      </h1>
      <nav>
        <a *ngFor="let link of links" [routerLink]="[link.href]"><span>{{ link.name }}</span></a>
      </nav>
    </header>
  `,
  styles: [`
    nav > a {
      font-size: 18px;
      text-transform: uppercase;
      margin-right: 5px;
    }
  `]
})
export class ToolbarComponent implements OnInit {
  title = 'App Title';
  links: any[] = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'}
  ];

  constructor() {}

  ngOnInit() {
    console.log('Toolbar component');
  }

}
