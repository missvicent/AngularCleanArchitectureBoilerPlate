import { ApplicationConfig } from '@angular/core';

import { sampleConfig } from './sample/sample.config';


export const infraConfig: ApplicationConfig = {
  providers: [
   ...sampleConfig.providers,
  ],
};
