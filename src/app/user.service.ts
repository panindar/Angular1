import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './users';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError(this.errorHandler))               
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
  
}
