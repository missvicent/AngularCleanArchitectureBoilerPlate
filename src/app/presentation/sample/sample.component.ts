
import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';

import { Observable } from 'rxjs';

import { SampleGetQuery } from '../../infra/sample/cqrs/sample.query';
import { SampleDto } from '@domain/sample/dtos/sample.dto';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [NgForOf, NgIf, AsyncPipe, CommonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {

  sampleList$: Observable<SampleDto>

  constructor(private query: SampleGetQuery) {
   this.sampleList$ = this.query.execute();
  }
}
