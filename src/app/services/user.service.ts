import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TaskItemReadDto } from '../dtos/taskItemRead.dto';
import { TaskItemList } from '../dtos/taskItemList.dto';
import { TaskItemAddDto } from '../dtos/taskItemAdd.dto';
import { UserReadDto } from '../dtos/userRead.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {this.baseUrl=baseUrl }
  GetAll()
  {
    return this.http.get<UserReadDto[]>(this.baseUrl + `/user`);
  }

}
