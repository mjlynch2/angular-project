import { Fruit } from '../fruit';
import { Component, OnInit } from '@angular/core';
import { FRUITS } from '../fruit-list';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  fruit: Fruit = {
    id: 1,
    name: 'Banana'
  };

  fruits = FRUITS;
  
  constructor() { }

  ngOnInit() {
  }

}
