import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { FRUITS } from './fruit-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})

export class FruitService {

  constructor(private messageService: MessageService) { }

  getFruits(): Observable<Fruit[]> {
    this.messageService.add('FruitService: fetched fruits');
    return of(FRUITS);
  }
}