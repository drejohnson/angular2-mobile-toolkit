import { Inject, Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES, IS_PRERENDER } from '@angular/app-shell';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdSpinner } from '@angular2-material/progress-circle';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HelloComponent } from './+hello';

@Component({
  moduleId: module.id,
  selector: 'hello-mobile-app',
  template: `
  <md-toolbar>
    {{title}}
  </md-toolbar>
  <md-spinner *shellRender></md-spinner>
  <router-outlet *shellNoRender></router-outlet>
  `,
  styles: [`
    md-spinner {
      margin: 24px auto 0;
    }
  `],
  directives: [APP_SHELL_DIRECTIVES, ROUTER_DIRECTIVES, MdToolbar, MdSpinner, HelloComponent],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HelloComponent}
])
export class AppComponent {
  title = 'hello-mobile works!';

  constructor(@Inject(IS_PRERENDER) isPrerender: boolean) {
    if (!isPrerender) {
      // fetch some data
    }
  }

  ngOnInit() {
    console.log('Main component');
  }
}
