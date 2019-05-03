import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test descprition',
      // tslint:disable-next-line:max-line-length
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    ),
    new Recipe(
      'Recipe 2',
      'This is Recipe 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqRSrKvWvPOq37JYlK2Daz0MLKRbQxZst0cDBbH167mqrAV9'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
