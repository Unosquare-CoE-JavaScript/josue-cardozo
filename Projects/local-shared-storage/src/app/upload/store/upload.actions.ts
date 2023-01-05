import { Action } from "@ngrx/store";

export const ON_UPLOAD_START = '[Upload] On Upload Start';
export const ON_UPLOAD_FINISH = '[Upload] On Upload Finish';

export class OnUploadStart implements Action {
  readonly type: string = ON_UPLOAD_START;
  constructor(public payload: { file: any, url: string }) { }
}

export class OnUploadFinish implements Action {
  readonly type: string = ON_UPLOAD_FINISH;
  constructor(public payload: { file: any, url: string }) { }
}

export type UploadActions = OnUploadStart | OnUploadFinish;
