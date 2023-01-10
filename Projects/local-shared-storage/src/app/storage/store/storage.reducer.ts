import * as StorageActions from "./storage.actions";

export interface State {
  storage: { nameFile: string, url: string}[],
}

const initialState: State = {
  storage: []
}

export function storageReducer(state: State = initialState, action: StorageActions.StorageActions) {
  switch (action.type) {
    case StorageActions.ADD_STORAGE:
      return {
        ...state,
        storage: [...state.storage, action.payload]
      }
    case StorageActions.DELETE_STORAGE_ITEM:
      return {
        ...state,
        storage: [...state.storage].filter(elem => elem.url !== action.payload.url)
      }
    default:
      return state
  }
}
