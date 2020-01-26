import { Fruit } from '../fruit';
import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';


@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  fruits: Fruit[];

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits()
      .subscribe(fruits => this.fruits = fruits);
  }

}