import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { infraConfig } from '../infra/infra.config';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ...infraConfig.providers,
  ],
};