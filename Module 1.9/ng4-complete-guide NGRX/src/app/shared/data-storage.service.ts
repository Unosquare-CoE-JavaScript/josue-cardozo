import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import * as fromApp from '../store/app.reducer';
import * as RecipesAction from '../recipes/store/recipe.actions';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private PATH: string = 'https://caniche-toy-marron.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>,
    ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        this.PATH,
        recipes
      )
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        this.PATH,
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
          });
        }
      ),
      tap(
        recipe => {
          //this.recipeService.setRecipes(recipe);
          this.store.dispatch(new RecipesAction.SetRecipes(recipe));
        }
      ));
  }
}
