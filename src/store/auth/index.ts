import produce from 'immer'
import {AuthLoadingStatus, AuthType, IAuthState} from "./types";
import {AuthActionType} from "./actions";

const initialAuthState: IAuthState = {
  currentUser: {
    username: '',
    avatar: '',
    fullName: '',
    id: ''
  },
  isAuth: false,
  loadingStatus: AuthLoadingStatus.IDLE
}

export const authReducer = produce((draft, action: AuthActionType) => {

  switch (action.type) {
    case AuthType.SET_USER:
      draft.currentUser = action.payload
      break

    case AuthType.SET_STATUS:
      draft.loadingStatus = action.payload
      break

    case AuthType.SET_AUTH:
      draft.isAuth = action.payload
      break
  }

}, initialAuthState)