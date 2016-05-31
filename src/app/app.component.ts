import { Inject, Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES, IS_PRERENDER } from '@angular/app-shell';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HomeComponent } from './+home';
import { AboutComponent } from './+about';
import { ToolbarComponent } from './shared';

@Component({
  moduleId: module.id,
  selector: 'hello-mobile-app',
  template: `
  <app-toolbar *shellNoRender></app-toolbar>
  <router-outlet *shellNoRender></router-outlet>
  `,
  styles: [],
  directives: [
    ...ROUTER_DIRECTIVES,
    ...APP_SHELL_DIRECTIVES,
    ToolbarComponent
  ],
  providers: [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS
  ]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent}
])
export class AppComponent {
  title = 'App Title';

  ngOnInit() {
    console.log('Main component');
  }
}
