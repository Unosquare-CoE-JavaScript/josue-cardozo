import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { map, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";

import * as UploadActions from '../store/upload.actions';
import * as fromApp from '../../store/app.reducer';
import * as StorageActions from '../../storage/store/storage.actions';

@Injectable()
export class UploadEffects {
  private PATH: string = 'https://file.io';

  uploadFile$ = createEffect(
    () => this.actions$.pipe(
      ofType<UploadActions.OnUploadStart>(UploadActions.ON_UPLOAD_START),
      switchMap(
        (payload: any) => {
          const formData = new FormData();
          formData.append("file", payload.payload.file, payload.payload.file.name);
          return this.http.post(this.PATH, formData);
        }
      ),
      tap(
        (resp: any) => {
          this.store.dispatch(new StorageActions.AddStorage({ nameFile: resp.name, url: resp.link }))
        }
      ),
      map(
        (resp: any) => {
          return new UploadActions.OnUploadFinish({ file: resp.name, url: resp.link });
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
  ) { }
}
