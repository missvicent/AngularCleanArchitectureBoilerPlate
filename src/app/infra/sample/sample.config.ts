import { ApplicationConfig } from '@angular/core';

import { SampleGetProvider } from './providers/sample.provider';
import { SampleGetUsecase } from '@domain/sample/usecases/sample-get.usecase';
import { SampleGetQuery } from './cqrs/sample.query';
import { SampleRepository } from '@domain/sample/repositories/sample.repository';
import { SampleRepositoryService } from './repositories/sample.repository';

export const sampleConfig: ApplicationConfig = {
  providers: [
    {
      provide: SampleRepository,
      useClass: SampleRepositoryService,
    },
    SampleGetProvider,
    SampleGetUsecase,
    SampleGetQuery,
  ],
};
