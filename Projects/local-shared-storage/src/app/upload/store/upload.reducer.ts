import * as UploadActions from "./upload.actions";

export interface State {
  file: any;
  isUploading: boolean;
  url: string;
}

const initialState: State = {
  file: null,
  isUploading: false,
  url: '',
}

export function uploadReducer(state: State = initialState, action: UploadActions.UploadActions) {
  switch (action.type) {
    case UploadActions.ON_UPLOAD_START:
      return {
        ...state,
        file: action.payload.file,
        isUploading: true,
        url: state.url,
      }
    case UploadActions.ON_UPLOAD_FINISH:
      return {
        ...state,
        file: action.payload.file,
        isUploading: false,
        url: action.payload.url,
      }
    default:
      return state
  }
}
