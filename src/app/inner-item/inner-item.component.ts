import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-item',
  templateUrl: './inner-item.component.html',
  styleUrls: ['./inner-item.component.css']
})
export class InnerItemComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() unit: string;
  @Input() index1: number;
  @Input() index2: number;
  @Input() warning: boolean;
  clicked : boolean = false;
  onClickItem(){
    this.clicked = !this.clicked;
  }
  ngOnInit(): void {
  }

}
