import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IResumeForm } from '../resume-form';

@Injectable()
export class ResumeFormService {
  readonly _resumepostUrl = 'https://jsonplaceholder.typicode.com';
  newResume: Observable<any>;
  constructor(private http: HttpClient) { }
  postResume(data) {
    this.newResume = this.http.post(this._resumepostUrl+'/posts', data);
    return this.newResume;
  }

}
