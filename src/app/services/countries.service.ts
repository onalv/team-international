import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getCountries (): Observable<any[]> {
    return this.http.get<any[]>(this.countriesUrl)
      .pipe(
        catchError(this.handleError('getCountries', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
