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
    this.getTaskList();
  }

  createTask(taskForm: FormGroup) {
    if (taskForm.valid) {
      const data = {title: taskForm.value.title, description: taskForm.value.description};

      this.taskService.create({task: data}).subscribe(_ => {
        this.getTaskList();
      })
    }
  }

  changeTaskStatus(task: TaskModel) {
    this.taskService.update(task).subscribe(_ => {
      this.getTaskList();
    })
  }

  getTaskList() {
    this.taskService.getList().subscribe(tasks => {
      this.sortTaskByStatus(tasks);
    })
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
    this.doneTaskList.sort((firstTask, secondTask) => {
      if (new Date(firstTask.updated_at) < new Date(secondTask.updated_at)) {
        return 1;
      }
      if (new Date(firstTask.updated_at) > new Date(secondTask.updated_at)) {
        return -1;
      }
      return 0;
    })
  }
}
