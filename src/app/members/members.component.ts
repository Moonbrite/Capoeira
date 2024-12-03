import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Users } from '../models/users';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-members',
  imports: [
    NgFor,
  ],
  templateUrl: './members.component.html',
  standalone: true,
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  constructor(
    private userService: UserService,
  ){};

  users?: Users[];
  user?: Users;

  ngOnInit(){
    this.userService.getAllUser().subscribe({
      next: (data: Users[]) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  
}
