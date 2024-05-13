import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { SampleDto } from "@domain/sample/dtos/sample.dto";
import { SampleGetUsecase } from "@domain/sample/usecases/sample-get.usecase";


@Injectable()


export class SampleGetQuery {

    constructor(private useCase: SampleGetUsecase) {}

    execute(): Observable<SampleDto> {
        return this.useCase.execute();
    }
}