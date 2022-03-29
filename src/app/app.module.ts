import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './user.service';
import { ImageService } from './image.service';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostNotFoundComponent } from './post-not-found/post-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AlbumsService } from './albums.service';
import { TodosService } from './todos.service';
import { CommentsService } from './comments.service';
import { UserformComponent } from './userform/userform.component';




@NgModule({

  declarations: [
    AppComponent,
    routingComponents,
    PostNotFoundComponent,
    UserDetailsComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ImageService, PostsService, AlbumsService, TodosService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
