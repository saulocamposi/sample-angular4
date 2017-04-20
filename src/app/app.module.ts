import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormScheduleComponent } from './form-schedule/form-schedule.component';
import { DetailScheduleComponent } from './detail-schedule/detail-schedule.component';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    FormScheduleComponent,
    DetailScheduleComponent,
    ListScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
