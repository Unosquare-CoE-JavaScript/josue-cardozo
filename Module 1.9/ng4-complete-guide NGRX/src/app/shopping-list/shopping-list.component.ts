import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredients.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientsChange.subscribe(
    //   (ingredients: Ingredient[]) => this.ingredients = ingredients
    // );

    this.loggingService.printLog('hello from shopping list')
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy(): void {
    //  this.subscription.unsubscribe();
  }
}
