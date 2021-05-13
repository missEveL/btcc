import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Case } from './models/case';


@Injectable({
  providedIn: 'root'
})
export class CaseService {
  GETCASES_URL = './assets/mock-data.json';
  //GETCASES_URL = 'http://localhost:8080/api/get/cases';

  constructor(private httpClient: HttpClient){}

  GetCases(): Observable<any> {
    return this.httpClient.get(this.GETCASES_URL).pipe(
      map((res: Case) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
