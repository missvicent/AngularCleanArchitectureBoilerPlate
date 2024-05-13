import { Serializable, jsonProperty } from "ts-serializable";

class SampleResultModel extends Serializable {
    @jsonProperty(String)
    name: string = '';

    @jsonProperty(String)
    url: string = '';
} 

export class SampleModel extends Serializable {
    @jsonProperty(Number)
    count: number = 0;

    @jsonProperty(String)
    next: string = '';
    
    @jsonProperty(String)
    previous: string = '';

    @jsonProperty(Array)
    results: SampleResultModel[] = [];
}