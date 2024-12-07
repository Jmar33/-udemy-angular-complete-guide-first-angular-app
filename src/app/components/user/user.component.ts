import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) avatar!:string
  @Input({ required: true }) name!:string
  @Input({ required: true }) id!:string

  // @Output() select = new EventEmitter()
  select = output<string>() // this sintaxe has the same effects of @Output because in underhood it creates an EventEmitter


  get imagePath(){
    return 'assets/users/' + this.avatar
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
