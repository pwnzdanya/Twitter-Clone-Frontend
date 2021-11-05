import React, {useEffect} from "react";

import Auth from "./pages/Auth";
import {useAppDispatch, useAppSelector} from "./hooks";
import {me} from "./store/auth/actions";
import {Navigate, Route, Routes} from "react-router-dom";

import {SideMenu} from "./components/SideMenu";
import {Home} from "./pages/Home";


function App() {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const loadingStatus = useAppSelector(state => state.auth.loadingStatus)

  useEffect(() => {
    dispatch(me())
  }, [dispatch])


  return (
    <>
      {
        isAuth
          ?
          <div className={'mainContainer'}>
            <SideMenu/>
            <Routes>
              <Route path={'/'} element={<Navigate replace to={'/home'}/>}/>
              <Route path={'/home'} element={<Home title={'Home'}/>}/>
            </Routes>
          </div>
          :
          <Routes>
            <Route path='/' element={<Auth/>}/>
          </Routes>
      }
    </>

  );
}

export default App;
