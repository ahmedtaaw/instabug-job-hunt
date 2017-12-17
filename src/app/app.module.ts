import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeFormComponent } from './resume-form/component/resume-form.component';
import { ResumeFormService } from './resume-form/service/resume-form.service';
@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ResumeFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
