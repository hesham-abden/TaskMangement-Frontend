import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { ListTaskItemComponent } from './list-taskItem/list-taskItem.component';
import { TaskItemRoutingModule } from './taskItem-routing.module';
import { AddTaskItemComponent } from './add-taskItem/add-taskItem.component';


@NgModule({
  declarations: [
    ListTaskItemComponent,
    AddTaskItemComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TaskItemRoutingModule
  ]
})
export class TaskItemModule { }
