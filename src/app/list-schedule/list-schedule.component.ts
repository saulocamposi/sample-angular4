import { Component, OnInit } from '@angular/core';
import { Schedule } from '../model/schedule';
import { SCHEDULE } from '../model/mock-list';

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit {

  showMessage: string = 'test';


  schedules: Schedule[] = SCHEDULE;

  constructor() { }

  ngOnInit() {
  }

  onNotifyClicked(message: string): void{
    this.showMessage = message;
  }

}
