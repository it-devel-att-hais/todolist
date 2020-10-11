import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  ApiService,
  TaskService,
} from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    TaskService,
  ],
  exports: [
  ]
})
export class CoreModule {
}
