import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-not-found',
  template: `
    <h2 class="danger"> Page not found  </h2>   
  `,
  styles: [
    `
    .danger {
      color:red
    }
    `
  ]
})
export class PostNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
