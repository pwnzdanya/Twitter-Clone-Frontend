import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './AuthRight.module.scss'
import SignInForm from "../components/SignInForm";
import SignUpForm from '../components/SignUpForm';


const AuthRight = () => {
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleSignStatus = () => {
    setIsSignedUp(!isSignedUp)
  }

  const handleModalOpen = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>
          <div className={styles.logoBody}>
            ИНОНКА ТВИТТЕРА
          </div>
          <span className={styles.mainTitle}>
          Happening now
        </span>
          <span className={styles.subTitle}>
          {isSignedUp ? 'Sign in to Twitter' : 'Join Twitter today'}
        </span>
          <div className={styles.sign}>
            <NavLink to={'/flow/signup'}>
              <div className={styles.wrapper}>
              <span>
                Not finished yet :)
              </span>
              </div>
            </NavLink>
            <div className={styles.wrapper}>
              <span>
                Not finished yet :)
              </span>
            </div>
            <div
              className={styles.wrapper}
              onClick={handleModalOpen}
            >
              <span>
                {isSignedUp ? 'Use email or username' : 'Sign up with email'}
              </span>
            </div>
          </div>
          {!isSignedUp
            ?
            <div className={styles.agree}>
              <p>
                By signing up, you agree to the <a className={styles.link} href="#">Terms of Service</a> and <a
                className={styles.link}
                href="#"> Privacy
                Policy</a> , including <a className={styles.link} href="#">Cookie Use</a>.
              </p>
            </div>
            :
            ''}
          <div className={styles.signIn}>
            Already have an account?
            <button onClick={handleSignStatus}>
              {isSignedUp ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
      {isSignedUp &&   <SignUpForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
      {isSignedUp ||   <SignInForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
    </>
  );
};

export default AuthRight;