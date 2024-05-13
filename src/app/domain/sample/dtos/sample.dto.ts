interface SampleResult {
    name: string;
}

export type  SampleDto = {
    next: string;
    previous: string;
    results: SampleResult[];
}