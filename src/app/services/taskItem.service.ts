import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TaskItemReadDto } from '../dtos/taskItemRead.dto';
import { TaskItemList } from '../dtos/taskItemList.dto';
import { TaskItemAddDto } from '../dtos/taskItemAdd.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskItemService {
  baseUrl: string;
  private taskToEdit!: TaskItemReadDto | null;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {this.baseUrl=baseUrl }
  GetAll()
  {
    return this.http.get<TaskItemList>(this.baseUrl + `/task`);
  }
  MarkAsComplete(id:number){
    return this.http.patch(this.baseUrl +`/task/${id}/complete`,null);
  }
  CreateTask(taskItem:TaskItemAddDto){
        return this.http.post(this.baseUrl +`/task`,taskItem);
  }
  setTask(taskItem:TaskItemReadDto | null){
    this.taskToEdit = taskItem
  }
  getTask() : TaskItemReadDto | null{
    return this.taskToEdit
  }
}
