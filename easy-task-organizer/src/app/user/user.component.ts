import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!:string;
  @Output() selected = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser()
  {
    this.selected.emit(this.id);
  }
}
