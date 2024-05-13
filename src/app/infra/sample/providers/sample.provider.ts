import { SampleRepository } from "@domain/sample/repositories/sample.repository";
import { SampleGetUsecase } from "@domain/sample/usecases/sample-get.usecase";

export const SampleGetProvider = {
    provide: SampleGetUsecase,
    useFactory: (repository: SampleRepository) => new SampleGetUsecase(repository),
    deps: [SampleRepository]
}
