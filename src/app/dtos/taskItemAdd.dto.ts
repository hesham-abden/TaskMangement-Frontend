export class TaskItemAddDto {
  title!: string;
  description!: string;
  userId!: number;
  startDate!: Date; 
  endDate!: Date;  
  isComplete!: boolean;
}

