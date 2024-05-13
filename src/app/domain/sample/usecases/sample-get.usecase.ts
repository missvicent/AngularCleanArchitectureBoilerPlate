import { Injectable } from "@angular/core";

import { Observable, map } from "rxjs";

import { SampleDto } from "../dtos/sample.dto";
import { SampleMapper } from "../mappers/sample.mapper";
import { SampleModel } from "../models/sample.model";
import { SampleRepository } from "../repositories/sample.repository";

@Injectable()

export class SampleGetUsecase {

    mapper = new SampleMapper();

    constructor(private repository: SampleRepository) {}

    execute(): Observable<SampleDto>{
        return this.repository.getSample().pipe(
            map((response: SampleModel) =>  this.mapper.mapModelToDto(response))
        );
    }
}   