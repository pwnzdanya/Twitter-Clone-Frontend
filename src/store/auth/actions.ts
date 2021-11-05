import {AuthLoadingStatus, AuthType, IShortUserInfo, ILoginData} from "./types";

export type setLoginType = ReturnType<typeof setLogin>
export type SetUserType = ReturnType<typeof setUser>
export type SetStatusType = ReturnType<typeof setStatus>
export type SetIsAuthType = ReturnType<typeof setIsAuth>
export type meType = ReturnType<typeof me>
export type AuthActionType = SetUserType | SetStatusType | setLoginType | SetIsAuthType | meType

export const setLogin = (payload: ILoginData) => ({type: AuthType.LOGIN, payload} as const)
export const me = () => ({type: AuthType.ME} as const)

export const setStatus = (payload: AuthLoadingStatus) => ({type: AuthType.SET_STATUS, payload} as const)
export const setUser = (payload: IShortUserInfo) => ({type: AuthType.SET_USER, payload} as const)
export const setIsAuth = (payload: boolean) => ({type: AuthType.SET_AUTH, payload} as const)