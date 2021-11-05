import React, {useState} from 'react';
import styles from './CurrentUser.module.scss'
import {useAppSelector} from "../../hooks";
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import ShortInfo from "./ShortInfo";
import PopUp from "./PopUp";

const CurrentUser = () => {

  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const currentUser = useAppSelector(state => state.auth.currentUser)

  const handlePopUpStatus = () => {
    setIsPopUpOpen(true)
  }

  return (
    <>
      <PopUp
        {...currentUser}
        isPopUpOpen={isPopUpOpen}
        setIsPopUpOpen={setIsPopUpOpen}
      />
      <div
        className={styles.main}
        onClick={handlePopUpStatus}
      >
        <ShortInfo
          {...currentUser}
        >
          <BiDotsHorizontalRounded size={20}/>
        </ShortInfo>
      </div>
    </>
  );
};

export default CurrentUser;