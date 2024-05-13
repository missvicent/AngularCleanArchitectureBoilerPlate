import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SampleModel } from '@domain/sample/models/sample.model';
import { environment } from '@env/environment';

@Injectable()
export class SampleRepositoryService {
  constructor(private http: HttpClient) {}

  getSample(): Observable<SampleModel> {
    return this.http.get<SampleModel>(environment.apiUrl + '/?limit=151');
  }
}
