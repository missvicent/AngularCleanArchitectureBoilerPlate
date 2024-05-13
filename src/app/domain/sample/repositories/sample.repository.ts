import { Observable } from "rxjs";

import { SampleModel } from "../models/sample.model";

export abstract class SampleRepository {
    abstract getSample(): Observable<SampleModel>;
}