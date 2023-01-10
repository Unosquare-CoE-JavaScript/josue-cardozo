import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as StorageActions from './store/storage.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit, OnDestroy {
  private storageSub: Subscription = Subscription.EMPTY;
  list: any;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.storageSub = this.store.select('storage').subscribe(storageState => {
      this.list = storageState.storage;
    })
  }
  
  ngOnDestroy(): void {
    this.storageSub.unsubscribe();
  }
}
