import { Component, OnInit } from '@angular/core';
import {IDataTableItem} from '../shared/DataTableItem'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  data: IDataTableItem[] = [
    {
      material: 'Сырье', deviations: 0, active: true, children: [
        { title: 'Загрузка печи по продукту', unit: 'Ед.изм', index1: 224.9, index2: 224.9, warning: false },
        { title: 'Температура продукта на выходе из печи', unit: 'Ед.изм', index1: 224.9, index2: 224.9, warning: false },
        { title: 'Температура продукта на выходе из печи', unit: 'Ед.изм', index1: 224.9, index2: 224.9, warning: false },
        { title: 'Доля отгона сырья', unit: 'Ед.изм', index1: 224.9, index2: 224.9, warning: false }]
    },
    { material: 'Топливо газообразное', deviations: 0, active: false, children: [] },
    { material: 'Жидкое топливо', deviations: 0, active: false, children: [] },
    { material: 'Дымовые газы', deviations: 0, active: false, children: [] },
    {
      material: 'Воздух', deviations: 0, active: true, children: [
        { title: 'Температура воздуха на горение в печи', unit: 'Ед.изм', index1: 224.9, index2: 224.9, warning: true },
        { title: 'Коэффициент избытка воздуха', unit: 'Ед.изм', index1: 224.9, index2: 224.9, warning: false },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
