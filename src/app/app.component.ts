import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId = ''

  get selectedUser() {
    return this.users.find((user) => user.id  === this.selectedUserId)
  }


  onSelectedUser(id: string){
    this.selectedUserId = id;
  }

}
