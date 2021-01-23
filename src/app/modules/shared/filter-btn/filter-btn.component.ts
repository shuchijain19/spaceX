import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-btn',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.scss']
})
export class FilterBtnComponent implements OnInit {
@Input() title:string;
@Input() filterSelected:boolean;
@Output() filterClick:EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.filterClick.emit()
  }

}
