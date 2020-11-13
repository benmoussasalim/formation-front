import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/model/user';
import {MessageResponse} from '../../shared/model/messageResponse';
import {UserService} from '../../shared/services/userService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user = new User();
  users: User[];
  messageResponse: MessageResponse;
  constructor(private userService: UserService,
              private router: Router) {
    this.user.enabled = false;
  }

  ngOnInit(): void {
    this.getAll();
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.messageResponse = data;
      this.getAll();
    }, error => console.log(error));
  }

  clickEdit(id: any) {
    this.router.navigate(['/app/personnes/user/edit/', id]);
  }

  clickAdd() {
    this.router.navigate(['/app/personnes/user/new']);
  }
  getAll() {
    this.userService.getAll().subscribe(data => {
      console.log(data);
      this.users = data;
    }, ex => console.log(ex));
  }
}
