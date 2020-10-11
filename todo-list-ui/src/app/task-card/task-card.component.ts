import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from "../core/models";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {

  DATE_FORMAT = 'dd.mm.yyyy HH:MM';

  @Input() task: TaskModel;

  @Output() changeTaskStatusEvent: EventEmitter<any> = new EventEmitter();

  changeTaskStatus(): void {
    this.changeTaskStatusEvent.emit([this.task]);
  }
}
