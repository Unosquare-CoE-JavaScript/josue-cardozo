import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as UploadActions from './store/upload.actions';
import * as fromApp from '../store/app.reducer';
import * as StorageActions from '../storage/store/storage.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit, OnDestroy {
  private uploadSub: Subscription = Subscription.EMPTY;
  file: any = null;
  isLoading: boolean = false;
  url: string = '';

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.uploadSub = this.store.select('upload')
    .subscribe(
      uploadState => {
        this.isLoading = uploadState.isUploading;
        this.url = uploadState.url;
        this.file = uploadState.file;
      }
    )
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    this.store.dispatch(new UploadActions.OnUploadStart({file: this.file, url: ''}));
  }

  ngOnDestroy(): void {
    this.uploadSub.unsubscribe();
  }
}
