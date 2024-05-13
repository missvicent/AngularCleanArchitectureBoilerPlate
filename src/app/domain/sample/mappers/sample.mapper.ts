import { SampleDto } from "../dtos/sample.dto"
import { SampleModel } from "../models/sample.model";

export class SampleMapper {
    mapListFrom(param: SampleDto): SampleDto {
        return param;
    }

    mapModelToDto(sampleModel: SampleModel): SampleDto {
        return {
            next: sampleModel.next,
            previous: sampleModel.previous,
            results: sampleModel.results.map(result => ({name: result.name}))
        };
    }
}