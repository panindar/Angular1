import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs';
import { IComment } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments').pipe(catchError(this.errorHandler))             
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError( error.message || "Server Error" )
  }


}
