import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { _throw as throwError } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUri: string = '/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  // Create
  createConference(data): Observable<any> {
    let url = `${this.baseUri}/conferences/create`;
    return this.http.post(url, data)
    //return this.http.post('/api/conferences/create', data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all Conferences ????
  getConferences() {
    return this.http.get(`${this.baseUri}/conferences`);
  }

  // Get Conference
  getConference(id): Observable<any> {
    let url = `${this.baseUri}/singleConference/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update Conference
  updateConference(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete Conference
  deleteConference(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
