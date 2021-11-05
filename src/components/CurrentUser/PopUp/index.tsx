import React from 'react';
import ShortInfo from "../ShortInfo";
import {IShortUserInfo} from "../../../store/auth/types";
import styles from './PopUp.module.scss'
import {BiCheck} from 'react-icons/bi'
import '../../../global.scss'

type ShortUserProps = IShortUserInfo & {
  isPopUpOpen: boolean
  setIsPopUpOpen: (isOpen: boolean) => void
}

const PopUp: React.FC<ShortUserProps> = (props) => {

  const disableFullScreen = props.isPopUpOpen ? `${styles.active} ${styles.main}` : `${styles.main}`
  const popUpClass = props.isPopUpOpen ? `${styles.active} ${styles.content}` : `${styles.content}`

  return (
    <>
      <div className={disableFullScreen} onClick={() => props.setIsPopUpOpen(false)}/>
      <div className={popUpClass}>
        <div className={`${styles.wrapper} borderBottom`}>
          <ShortInfo
            {...props}
          >
            <BiCheck size={23} className={styles.icon}/>
          </ShortInfo>
        </div>
        <div className={styles.item}>
          Log out @{props.username}
        </div>
      </div>
    </>
  );
};

export default PopUp;