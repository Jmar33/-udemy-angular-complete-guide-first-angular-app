import { Component, Input, output } from '@angular/core';
import { type User } from './user.model';

// type User = {
//   name: string,
//   avatar: string,
//   id: string
// }


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Input({ required: true }) user!: User
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true }) avatar!:string
  // @Input({ required: true }) name!:string
  // @Input({ required: true }) id!:string

  // @Output() select = new EventEmitter()
  select = output<string>() // this sintaxe has the same effects of @Output because in underhood it creates an EventEmitter


  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
