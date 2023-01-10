import { Action } from "@ngrx/store";

export const ADD_STORAGE = '[Storage] Add Storage Item';
export const DELETE_STORAGE_ITEM = '[Storage] Delete Storage Item';

export class AddStorage implements Action {
  readonly type: string = ADD_STORAGE;
  constructor(public payload: { nameFile: any, url: string }) { }
}

export class DeleteStorage implements Action {
  readonly type: string = DELETE_STORAGE_ITEM;
  constructor(public payload: { nameFilefile: any, url: string }) { }
}

export type StorageActions = AddStorage | DeleteStorage;
