import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CommentsService } from '../comments.service';


@Component({
  selector: 'app-comments',
  template: `
  
  <button (click)="onClick()"> Back </button>
  <h1> comments for this post </h1>
  <div *ngFor="let comment of comments">
   <div *ngIf="isSelected(comment)">   
     <ul> 
      <li> <h2><span [style.color] = "'blue'"> Name </span> : {{comment.name}} </h2> <h2 > <span [style.color] = "'blue'"> commentMade </span>: {{comment.body}} </h2> </li>
     </ul>
   </div> 
  </div>
  
  `,
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public poId;
  public comments = [];
  public errorMsg;

  constructor(private _commentSerivces: CommentsService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.poId = id;
    });

    this._commentSerivces.getComments()
      .subscribe(data => this.comments = data,
        error => this.errorMsg = error);
  }
  isSelected(comment) {
    return this.poId === comment.postId
  }
  onClick() {
    let selectedId = this.poId ? this.poId : null;
    this.router.navigate(['/posts', selectedId]);
 }

  }


