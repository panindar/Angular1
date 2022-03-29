import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  public userName;
  public password;
  public users = []
  public errorMsg = '';
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.users = data,
                 error => this.errorMsg = error);
  }
  isSelected(user) {
    return user.username === this.userName
  }
  onSubmit(user) {
    console.log(user);
  }

}
