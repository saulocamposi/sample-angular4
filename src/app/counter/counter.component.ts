import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter : number = 0;
  initialvalue : number = 10;

  @Output() valuechanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.counter++;
    this.valuechanged.emit('Value Changed');

  }

  decrement(event){
    this.counter--;
    console.log(event);
  }

  onChangeValue(event){

  }

}
