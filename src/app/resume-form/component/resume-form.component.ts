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
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    this.newResumeStatus=this._ResumeFormService.postResume(data);
  }
}
