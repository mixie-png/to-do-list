import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  tasks = tasks

  constructor() { }

  // filterList(filterTask) {
  //   if (tasks.values = filterTask) {
  //     return tasks.values
  //   } else if {}
  // }

  ngOnInit() {
  }

}
