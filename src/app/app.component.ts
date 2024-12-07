import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./components/task/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId = 'u1'

  get selectedUser() {
    return this.users.find((user) => user.id  === this.selectedUserId)
  }


  onSelectedUser(id: string){
    this.selectedUserId = id;
  }

}
