import {call, put, takeEvery} from "redux-saga/effects";
import {AuthLoadingStatus, AuthType} from "./types";
import {setIsAuth, setLoginType, setStatus, setUser} from "./actions";
import AuthAPI, {ILoginResponse} from "../../API/AuthAPI";


function* login({payload}: setLoginType) {
  try {
    yield put(setStatus(AuthLoadingStatus.LOADING))
    const userShortData: ILoginResponse = yield call(AuthAPI.login, payload)
    window.localStorage.setItem('token', userShortData.token);
    const currentUser = {
      id: userShortData.id,
      username: userShortData.username,
      fullName: userShortData.fullName,
      avatar: userShortData.avatar || '',
    }
    yield put(setStatus(AuthLoadingStatus.SUCCESS))
    yield put(setUser(currentUser))
    yield put(setIsAuth(true))
  } catch (err) {
    yield put(setStatus(AuthLoadingStatus.ERROR))
  }
}

function* me() {
  try {
    yield put(setStatus(AuthLoadingStatus.LOADING))
    const userShortData: ILoginResponse = yield call(AuthAPI.me)
    console.log(userShortData)
    yield put(setStatus(AuthLoadingStatus.SUCCESS))
    yield put(setUser(userShortData))
    yield put(setIsAuth(true))
  } catch (err) {
    yield put(setStatus(AuthLoadingStatus.ERROR))
  }
}

export function* authSaga() {
  yield takeEvery(AuthType.LOGIN, login)
  yield takeEvery(AuthType.ME, me)
}

