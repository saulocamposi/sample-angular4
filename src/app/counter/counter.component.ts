import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter : number = 0;
  initialvalue = 10;

  @Output() valuechanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.counter++;
    this.valuechanged.emit({counter: this.counter });
    console.log("Increment");
  }

  decrement(){
    this.counter--;
    this.valuechanged.emit({counter: this.counter });
    console.log("Decrement");
  }

  onChangeValue(f) : void{
    console.log(f);
  }




}
