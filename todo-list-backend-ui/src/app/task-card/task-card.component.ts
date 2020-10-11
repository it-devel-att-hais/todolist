import { Component, Input } from '@angular/core';
import { TaskModel } from "../core/models";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {

  @Input() task: TaskModel;
}
