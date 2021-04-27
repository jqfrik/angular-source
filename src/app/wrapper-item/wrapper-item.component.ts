import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-item',
  templateUrl: './wrapper-item.component.html',
  styleUrls: ['./wrapper-item.component.css']
})
export class WrapperItemComponent implements OnInit {

  constructor() { }
  @Input() material: string;
  @Input() deviations: number;
  @Input() innerItems: string[];
  @Input() active: boolean;
  onToggleShowItems() {
    this.innerItems.length > 0 ? this.active = !this.active : '';
  }
  ngOnInit(): void {
  }

}
