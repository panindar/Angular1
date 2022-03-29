import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-posts',
  template: `
  <button (click)="onClick()"> Back </button>
  <h1> Posts of you </h1>
  <div *ngFor="let post of posts">
   <div *ngIf="isSelected(post)">   
     <ul> 
      <li> <h2> postId:  {{post.id}} </h2> <h2> <span [style.color] = "'blue'"> title </span>: {{post.title}} </h2> <h2> <span [style.color] = "'blue'"> postMade </span>: {{post.body}} </h2> </li>
      <button (click)="onSelect(post)">
       <span class="badge"> comments </span> 
    </button>
     </ul>
   </div> 
  </div>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts = [];
  public errorMsg = '';
  public useId

  constructor(private _postsSerivces: PostsService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.useId = id;
    });

    this._postsSerivces.getPosts()
      .subscribe(data => this.posts = data,
        error => this.errorMsg = error);
  }
  isSelected(post) {
    return this.useId === post.userId
  }
  onClick() {
    let selectedId = this.useId ? this.useId : null;
    this.router.navigate(['/users', selectedId]);
  }
  onSelect(post) {
    this.router.navigate(['/comments', post.id])
    
  }
 
  }

