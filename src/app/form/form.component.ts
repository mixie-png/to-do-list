import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tasks = tasks
  constructor() { }

  addTask(newTask) {
    tasks.push({task: newTask, completed: false});
  }

  ngOnInit() {
  }

}
