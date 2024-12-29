import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?:string;

  isAddingTask: boolean = false;
  tasks = [...DUMMY_TASKS];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancel(){
    this.isAddingTask = false;
  }
}