import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/Services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        console.log(params.searchTerm);
        this.foods = foodService.getAllFoodBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.foods = foodService.getAllFoodByTag(params.tag);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }

  ngOnInit(): void {}
}
