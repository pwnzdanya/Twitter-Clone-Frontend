export enum AuthType {
  LOGIN = 'auth/LOGIN',
  SET_USER='auth/SET-USER',
  SET_STATUS= 'auth/SET-STATUS',
  SET_AUTH = 'auth/SET-IS-AUTH',
  ME = 'auth/ME'
}

export enum AuthLoadingStatus {
  IDLE='idle',
  SUCCESS='success',
  ERROR='error',
  LOADING='loading'
}

export interface ILoginData {
  email: string
  password: string
}

export interface IShortUserInfo {
  id: string
  username: string
  fullName: string
  avatar: string
}

export interface IAuthState {
  currentUser: IShortUserInfo
  isAuth: boolean
  loadingStatus: AuthLoadingStatus
}