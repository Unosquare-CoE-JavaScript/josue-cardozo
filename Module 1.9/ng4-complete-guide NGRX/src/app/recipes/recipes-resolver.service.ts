import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, Observable, of, switchMap, take } from "rxjs";
import { Store } from "@ngrx/store";

import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from './store/recipe.actions';
import { Actions, ofType } from "@ngrx/effects";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipesService.getRecipes();
    if (recipes.length === 0) {
      //return this.dataStorageService.fetchRecipes();
      this.store.select('recipes').pipe(
        take(1),
        map(
          recipesState => {
            return recipesState.recipes;
          }
        ),
        switchMap(
          recipes => {
            if (recipes.length === 0) {
              this.store.dispatch(new RecipesActions.FetchRecipes());
              return this.actions$.pipe(
                ofType(RecipesActions.SET_RECIPES),
                take(1)
              );
            } else {
              return of(recipes);
            }
          }
        )
      );
    } else {
      return recipes;
    }
  }
}
