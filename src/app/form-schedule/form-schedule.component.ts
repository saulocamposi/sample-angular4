import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-schedule',
  templateUrl: './form-schedule.component.html',
  styleUrls: ['./form-schedule.component.css']
})
export class FormScheduleComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void{
    this.notify.emit('Message Child');
  }

  constructor() { }

  ngOnInit() {
  }

}
