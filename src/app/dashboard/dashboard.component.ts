import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(private FruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.FruitService.getFruits()
      .subscribe(fruits => this.fruits = fruits.slice(1, 7));
  }

}
