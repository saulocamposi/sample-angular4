import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter : number = 0;
  initialvalue : number = 10;

  valuechanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.counter++;
    this.valuechanged.emit('Value Changed');
  }

  decrement(){
    this.counter--;
  }

}
