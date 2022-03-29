
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details',
  template: `
  <h2 class='danger'> {{errorMsg}}</h2>
  <h2> {{message}}</h2>
  <button (click)="goPrevious()"> Go previous </button>
  <button (click)="goNext()"> GoNext </button>
  <button (click)="goToUsers()"> Back </button>
  <div *ngFor = "let user of users"> 
    <div *ngIf="isSelected(user)"> 
      <h2> <span [style.color] = "'blue'"> userId </span>: {{user.id}} </h2> 
      <h2> <span [style.color] = "'blue'"> Name </span>: {{user.name}} </h2>
      <h2> <span [style.color] = "'blue'"> Email </span>: {{user.email}} </h2>
      <h2> <span [style.color] = "'blue'"> UserName </span>: {{user.username}} </h2>
      <h2> <span [style.color] = "'blue'"> Phone </span>: {{user.phone}} </h2>
      <h2> <span [style.color] = "'blue'"> Address </span>:  </h2>
      <h3> <span [style.color] = "'brown'"> street </span>: {{user.address.street}} </h3>
      <h3> <span [style.color] = "'brown'"> suite </span>: {{user.address.suite}} </h3>
      <h3> <span [style.color] = "'brown'"> city </span>: {{user.address.city}} </h3>
      <h3> <span [style.color] = "'brown'"> Zipcode </span>: {{user.address.zipcode}} </h3>
      <h2> <span [style.color] = "'blue'"> Company </span>: </h2>
      <h3> <span [style.color] = "'brown'"> Name </span>: {{user.company.name}} </h3>
      <h3> <span [style.color] = "'brown'"> catchPhrase </span>: {{user.company.catchPhrase}} </h3>
      <h3> <span [style.color] = "'brown'"> bs </span>: {{user.company.bs}} </h3>


      <span> 
        <button (click)="onTodos(user)"> Todos </button>
        <button (click)="onAlbums(user)"> Albums </button>
        <button (click)="onPosts(user)"> Posts </button>

      </span>
      
    </div>
   </div>
  `,
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userId;
  public users = [];
  public errorMsg;
  public message = '';

  constructor(private route: ActivatedRoute,private router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'))
    //this.userId = id
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId = id;
      this._userService.getUsers()
        .subscribe(data => this.users = data,
                   error => this.errorMsg = error);
    })
  }
  goPrevious() {
    let previousId = this.userId - 1;
    this.router.navigate(['/users', previousId])
  }
  goNext() {
    let nextId = this.userId + 1;
    this.router.navigate(['/users', nextId])
  }
  goToUsers() {
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['/users', { id: selectedId }]);
  }
  isSelected(user) { 
    return user.id === this.userId;
  }
  onTodos(user) {
    this.router.navigate(['/todos', user.id])
  }
  onAlbums(user) {
    this.router.navigate(['/albums', user.id])
  }
  onPosts(user) {
   this.router.navigate(['/posts', user.id])
  }

}
