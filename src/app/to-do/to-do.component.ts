import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasks = tasks
  constructor() { }
  
  addTask(newTask) {
    tasks.push({task: newTask, completed: false});
  }

  removeTask(searchTask) {
    const index = tasks.indexOf(searchTask);
    tasks.splice(index, 1);
  }

  completeTask(task) {
    task.completed = true;
  }

  // filterList(filterTask) {
  //   if (tasks.values = filterTask) {
  //   return tasks.values;
  // } else {
  //   return null;
  // }
  // }



  ngOnInit() {
  };

}

// interface Todo {
//   task: string,
//   completed: Boolean,
// }