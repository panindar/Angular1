import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ITodos } from './todos';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodos[]> {
    return this.http.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos').pipe(catchError(this.errorHandler))             
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }

}
