import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskItemAddDto } from 'src/app/dtos/taskItemAdd.dto';
import { UserReadDto } from 'src/app/dtos/userRead.dto';
import { TaskItemService } from 'src/app/services/taskItem.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-TaskItem',
  templateUrl: './add-TaskItem.component.html',
  styleUrls: ['./add-TaskItem.component.css']
})
export class AddTaskItemComponent implements OnInit {
  users: UserReadDto[] = [];
constructor(private route:Router,private taskService:TaskItemService,private userService:UserService) {}
  ngOnInit(): void {
    this.userService.GetAll().subscribe(data=>{
      this.users = data;
    })
  }

form = new FormGroup({
  title: new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')
  ]),
  description: new FormControl('', [
    Validators.required
  ]),
  assignedUserId: new FormControl(null, [
    Validators.required,
    Validators.min(1)
  ]),
  startDate: new FormControl('', [
    Validators.required
  ]),
  endDate: new FormControl('', [
    Validators.required
  ])
});




submitForm(){
  const newTaskItem = new TaskItemAddDto()
  newTaskItem.title = this.form.controls.title.value!;
  newTaskItem.description = this.form.controls.description.value!;
  newTaskItem.startDate = new Date(this.form.controls.startDate.value!);
  newTaskItem.endDate = new Date(this.form.controls.endDate.value!);
  newTaskItem.userId = this.form.controls.assignedUserId.value!;

  this.taskService.CreateTask(newTaskItem).subscribe(data => {
    this.route.navigate(["./"])
  })
}


get title(){
  console.log(this.form)
  return this.form.get('title')!;
}
get description(){
  return this.form.get('description')!;
}
get startDate(){
  return this.form.get('startDate')!;
}

get endDate(){
  return this.form.get('endDate')!;
}

get assignedUserId(){
  return this.form.get('assignedUserId')!;
}


}

