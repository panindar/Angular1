import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserImagesComponent } from './user-images/user-images.component';
// import { UserListComponent } from './user-list/user-list.component';
import { PostsComponent } from './posts/posts.component';
import { PostNotFoundComponent } from './post-not-found/post-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { CommentsComponent } from './comments/comments.component';
import { UserformComponent } from './userform/userform.component';


const routes: Routes = [
  { path: '', redirectTo:'/forms', pathMatch:'full'},
  { path: 'forms', component: UserformComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  {
    path: 'albums/:id', component: AlbumsComponent,
    children: [
      {path: 'images', component: UserImagesComponent}
    ]},
  { path: 'todos/:id', component: TodosComponent},
  { path: 'images/:id', component: UserImagesComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'comments/:id', component: CommentsComponent },
  {path: '**', component: PostNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserformComponent, UserImagesComponent, PostsComponent, UserDetailsComponent, AlbumsComponent, TodosComponent, CommentsComponent]