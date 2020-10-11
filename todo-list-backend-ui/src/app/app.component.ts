import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "./core/services";
import { TaskModel } from "./core/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list-backend-ui';

  inProgressTaskList: TaskModel[] = [];
  doneTaskList: TaskModel[] = [];

  constructor(
    private taskService: TaskService,
  ) {
  }

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.taskService.getList().subscribe(tasks => {
      this.sortTaskByStatus(tasks);
    })
  }

  createTask(taskForm: FormGroup) {
    if (taskForm.valid) {
      const data = {title: taskForm.value.title, description: taskForm.value.description};

      this.taskService.create({task: data}).subscribe(_ => {
        this.taskService.getList().subscribe(tasks => {
          this.sortTaskByStatus(tasks);
        })
      })
    }
  }

  sortTaskByStatus(tasks: TaskModel[]) {
    this.doneTaskList = [];
    this.inProgressTaskList = [];

    for (let task of tasks) {
      if (task.done) {
        this.doneTaskList.push(task)
      } else {
        this.inProgressTaskList.push(task)
      }
    }
  }
}
