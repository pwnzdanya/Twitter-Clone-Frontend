import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from "./saga";

const rootReducer = combineReducers({
  auth: authReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


// @ts-ignore
window.store = store
