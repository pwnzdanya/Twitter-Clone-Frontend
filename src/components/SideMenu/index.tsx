import React from "react";
import styles from './SideMenu.module.scss'
import {NavLink} from "react-router-dom";
import {MdHome, MdNotifications, MdOutlineEmail} from "react-icons/md";
import {BiDotsHorizontalRounded, BiHash} from 'react-icons/bi'
import {AiOutlineTwitter, AiOutlineUser} from "react-icons/ai";
import CurrentUser from "../CurrentUser";
import Button from "../UI/Button";

export const SideMenu: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logoBody}>
        <NavLink to={'/home'}>
          <AiOutlineTwitter
            className={styles.twitterLogo}
            size={45}
          />
        </NavLink>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={({isActive}) => isActive ? styles.active : ''}
            to={'/home'}>
            <div>
              <MdHome size={30}/>
              <span>
              Home
            </span>
            </div>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({isActive}) => isActive ? styles.active : ''}
            to={'/explore'}>
            <div>
              <BiHash size={30}/>
              <span>
              Explore
            </span>
            </div>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({isActive}) => isActive ? styles.active : ''}
            to={'/notifications'}>
            <div>
              <MdNotifications size={30}/>
              <span>
              Notifications
            </span>
            </div>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({isActive}) => isActive ? styles.active : ''}
            to={'/messages'}>
            <div>
              <MdOutlineEmail size={30}/>
              <span>
              Messages
            </span>
            </div>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({isActive}) => isActive ? styles.active : ''}
            to={'/profile'}>
            <div>
              <AiOutlineUser size={30}/>
              <span>
              Profile
            </span>
            </div>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({isActive}) => isActive ? styles.active : ''}
            to={'/more'}>
            <div>
              <BiDotsHorizontalRounded size={30}/>
              <span>
              More
            </span>
            </div>
          </NavLink>
        </li>
      </ul>
      <Button className={styles.btn}
      main
      >
        Tweet
      </Button>
      <CurrentUser/>
    </div>
  )
    ;
};
