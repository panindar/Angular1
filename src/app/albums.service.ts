import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IAlbums } from './albums';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbums[]> {
    return this.http.get<IAlbums[]>('https://jsonplaceholder.typicode.com/todos').pipe(catchError(this.errorHandler))             
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError( error.message || "Server Error" )
  }
}
