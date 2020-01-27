import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { FRUITS } from './fruit-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FruitService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    this.messageService.add(`FruitService: ${message}`);
  }

  private fruitsUrl = "api/fruits";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.fruitsUrl)
      .pipe(
        tap(_ => this.log('fetched fruits')),
        catchError(this.handleError<Fruit[]>("getFrtuis", [])));
  }

  getFruit(id: number): Observable<Fruit> {
    const url = `${this.fruitsUrl}/${id}`;
    return this.http.get<Fruit>(url)
      .pipe(
        tap(_ => this.log(`fetched fruit id=${id}`)),
        catchError(this.handleError<Fruit>(`getHero id=${id}`))
      );
  }
}
