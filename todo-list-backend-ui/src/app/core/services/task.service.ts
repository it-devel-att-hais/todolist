import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { TaskModel } from "../models";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private apiService: ApiService,
  ) {
  }

  getList(): Observable<TaskModel[]> {
    return this.apiService.get(`tasks`).pipe(task => task);
  }

  create(data: any): Observable<TaskModel> {
    return this.apiService.post(`tasks`, data).pipe(task => task);
  }
}
