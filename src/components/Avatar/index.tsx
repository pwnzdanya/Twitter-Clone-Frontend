import React from 'react';
import styles from './Avavar.module.scss'

interface IAvatar {
  img: string
  medium?: boolean
  large?: boolean
}

const Avatar: React.FC<IAvatar> = ({img, medium, large}) => {

  const LOGO_NO_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png'

  let avatarSizeClass;
  if (medium) {
    avatarSizeClass = `${styles.avatar} ${styles.medium}`
  } else if (large) {
    avatarSizeClass = `${styles.large} ${styles.large}`
  } else {
    avatarSizeClass = `${styles.avatar}`
  }

  return (
    <div className={avatarSizeClass}>
      <img
        src={img ? img : LOGO_NO_AVATAR}
        alt="user avatar"/>
    </div>
  );
};

export default Avatar;