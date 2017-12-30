import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IResumeForm } from '../resume-form';

@Injectable()
export class ResumeFormService {
  readonly _resumepostUrl = 'http://api.instabug.com/api/apply/frontend';
  newResume: Observable<any>;
  constructor(private http: HttpClient) { }
  postResume(data) {
    this.newResume = this.http.post(this._resumepostUrl, data);
    return this.newResume;
  }

}
