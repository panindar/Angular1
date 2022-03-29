import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImages } from './images';
import {  catchError, Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<IImages[]> {
    return this.http.get<IImages[]>('https://jsonplaceholder.typicode.com/photos').pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
}
