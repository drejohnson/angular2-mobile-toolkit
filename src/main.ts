import { bootstrap } from '@angular/platform-browser-dynamic';
import {enableProdMode, provide, PLATFORM_DIRECTIVES, PLATFORM_PIPES} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';

if (environment.production) {
  enableProdMode();
}

const APPLICATION_PROVIDERS = [
  ...APP_SHELL_RUNTIME_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS
];

const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
];

export const APPLICATION_PIPES = [];

bootstrap(AppComponent, [
  ...APPLICATION_PROVIDERS,
  ...APPLICATION_DIRECTIVES,
  ...APPLICATION_PIPES,
  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true}),
  provide(PLATFORM_PIPES, {useValue: APPLICATION_PIPES, multi: true}),
  provide(APP_BASE_HREF, { useValue: '/' })
])
  .catch(err => console.error(err));

