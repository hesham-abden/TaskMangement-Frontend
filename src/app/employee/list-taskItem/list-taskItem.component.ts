import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TaskItemList } from 'src/app/dtos/taskItemList.dto';
import { TaskItemReadDto } from 'src/app/dtos/taskItemRead.dto';
import { TaskItemService } from 'src/app/services/taskItem.service';

@Component({
  selector: 'app-list-taskItem',
  templateUrl: './list-taskItem.component.html',
  styleUrls: ['./list-taskItem.component.css'],
})
export class ListTaskItemComponent implements OnInit {
  public TaskItemPaginated!: TaskItemList;

  name: string ='';
  TaskItems: TaskItemReadDto[] = [];
  constructor(private TaskItemService: TaskItemService,private route:Router) {}

  ngOnInit(): void {
    this.TaskItemService.GetAll().subscribe(data =>{
      this.TaskItems = data.taskDtos;
      console.log(data);
    })
  }
  MarkAsComplete(taskItem:TaskItemReadDto){
    this.TaskItemService.MarkAsComplete(taskItem.id).subscribe(data=>{
      taskItem.completionStatus = 'Completed';
    })
  }
  EditTask(taskItem:TaskItemReadDto){
    this.TaskItemService.setTask(taskItem);
    this.route.navigateByUrl("/edit");
  }
}
