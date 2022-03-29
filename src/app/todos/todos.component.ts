import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  template: `
    <button (click)="onClick()"> Back </button>
    <h1> todos of you </h1>
    <div *ngFor="let todo of todos">
      <div *ngIf="isSelected(todo)">
          <ul>
              <li> 
                <h2><span [style.color] = "'blue'"> TodoId </span>: {{todo.id}} </h2> <h2><span [style.color] = "'blue'"> title </span>: {{todo.title}} </h2> <h2><span [style.color] = "'blue'"> isCompleted </span>: {{todo.completed}} </h2>
              </li>
          </ul>
      </div>
    </div>
  `,
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public useId;
  public errorMsg;
  public todos = [];
  
  constructor(private route: ActivatedRoute, private _todoService: TodosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.useId = id;
    });
    this._todoService.getTodos()
      .subscribe(data => this.todos = data,
                 error => this.errorMsg = error)
  }
  isSelected(todo) {
    return (
      this.useId === todo.userId
       )
  }
  onClick() {
    let selectedId = this.useId ? this.useId : null;
    this.router.navigate(['/users', selectedId]);
  }

}
