import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IResumeForm } from '../resume-form';
import { ResumeFormService } from '../service/resume-form.service';
@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  newResumeStatus: Observable<any>;
  constructor(private _ResumeFormService:ResumeFormService) {
  }

  ngOnInit() {

  }
  sendResume() {
    const data: IResumeForm = {
      "name":"name string",
      "email":"email string",
      "phone":"phone string",
      "special":"special string",
      "projects":"projects string",
      "profile_links":"profile_links string"
    }
    this.newResumeStatus=this._ResumeFormService.postResume(data);
  }
}
