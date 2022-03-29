import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  template: `
  <h2> User List </h2>
  {{errorMsg}}
  <ul class="items">
    <li (click)="onSelect(user)" *ngFor="let user of users">
       <span class="badge"> {{user.id}} </span> {{user.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = []
  public errorMsg = '';
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.users = data,
                 error => this.errorMsg = error);
  }
  onSelect(user) {
    this.router.navigate(['/users', user.id])
    
  }

}
