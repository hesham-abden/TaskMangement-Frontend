import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskItemComponent } from './list-taskItem/list-taskItem.component';
import { AddTaskItemComponent } from './add-taskItem/add-taskItem.component';

const routes: Routes = [{ path: "", component: ListTaskItemComponent },
 { path: "add", component: AddTaskItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskItemRoutingModule { }
