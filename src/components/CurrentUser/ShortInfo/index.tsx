import React from 'react';
import styles from './ShortInfo.module.scss'
import {IShortUserInfo} from "../../../store/auth/types";
import Avatar from "../../Avatar";

const ShortInfo: React.FC<IShortUserInfo> = ({fullName, username, avatar, children}) => {

  return (

    <div className={styles.main}>
      <Avatar
        img={avatar}
      />
      <div className={styles.description}>
        <span
          className={styles.fullName}
        >
          {fullName}
        </span>
        <span
          className={styles.username}
        >
                @{username}
        </span>
      </div>
      <div className={styles.right}>
        {children}
      </div>
    </div>

  );
};

export default ShortInfo;