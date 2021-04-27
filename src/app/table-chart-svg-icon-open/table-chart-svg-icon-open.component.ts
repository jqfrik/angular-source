import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-chart-svg-icon-open',
  templateUrl: './table-chart-svg-icon-open.component.html',
  styleUrls: ['./table-chart-svg-icon-open.component.css']
})
export class TableChartSvgIconOpenComponent implements OnInit {
  @Input() active: boolean;
  @Input() innerItems: string[];
  svgActive = 'rotate(0)'
  svgInactive = 'rotate(-45deg)';
  constructor() { }

  ngOnInit(): void {
  }

}
