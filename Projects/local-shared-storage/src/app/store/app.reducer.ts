import { ActionReducerMap } from "@ngrx/store";

import * as fromUpload from '../upload/store/upload.reducer';
import * as fromStorage from '../storage/store/storage.reducer';

export interface AppState {
  upload: fromUpload.State;
  storage: fromStorage.State
}

export const appReducer: ActionReducerMap<any,any> = { //ActionReducerMap<AppState>
  upload: fromUpload.uploadReducer,
  storage: fromStorage.storageReducer
}
