import { Component, OnInit, Input} from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

  @Input() fruit: Fruit;

  constructor(
    private route: ActivatedRoute,
    private fruitService: FruitService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getFruit();
  }

  getFruit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fruitService.getFruit(id)
      .subscribe(fruit => this.fruit = fruit);
  }
}
