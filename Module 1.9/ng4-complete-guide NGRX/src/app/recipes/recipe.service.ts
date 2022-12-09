import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'val1',
  //     'desc1',
  //     'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg',
  //     [new Ingredient('ing1-1', 10), new Ingredient('ing2-1', 20), new Ingredient('ing3-1', 30)]),
  //   new Recipe(
  //     'val2',
  //     'desc2',
  //     'https://upload.wikimedia.org/wikipedia/en/7/7d/Red_Kroeung_Recipe.jpg',
  //     [new Ingredient('ing1-2', 50), new Ingredient('ing2-2', 25), new Ingredient('ing3-2', 36)]),
  //   new Recipe(
  //     'val3',
  //     'desc3',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAR5VK8axA2ny3rz5D88-iHPEWZOZzDn-6w&usqp=CAU',
  //     [new Ingredient('ing1-3', 96), new Ingredient('ing2-3', 75), new Ingredient('ing3-3', 25)]),
  // ];

  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromApp.AppState>
    ) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
