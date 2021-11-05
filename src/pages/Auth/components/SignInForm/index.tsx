import React, {useState} from 'react';
import Button from '../../../../components/UI/Button';
import Input from '../../../../components/UI/Input';
import ModalWindow from '../../../../components/UI/ModalWindow';
import styles from './SignIn.module.scss'
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {ILoginData} from "../../../../store/auth/types";
import {useAppDispatch} from "../../../../hooks";
import {setLogin} from "../../../../store/auth/actions";

interface ISignInForm {
  isOpenModal: boolean
  setIsOpenModal: (isOpenModel: boolean) => void
}

const SignInForm: React.FC<ISignInForm> = ({isOpenModal, setIsOpenModal}) => {

  const [isPassHide, setIsPassHide] = useState(true)
  const handlePassHide = () => setIsPassHide(!isPassHide)

  const dispatch = useAppDispatch()

  const validationSchema = yup.object({
    email: yup.string().email().min(6).max(40).required(),
    password: yup.string().min(6).max(40).required()
  }).required()

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validationSchema)});
  const onSubmit = (data: ILoginData) => {
    dispatch(setLogin(data))
  }

  return (
    <ModalWindow
      isOpen={isOpenModal}
      setIsOpen={setIsOpenModal}
      title={'To get started, enter your email and password'}
    >
      <div className={styles.wrapper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <ul className={styles.list}>
            <li className={styles.item}>
              <Input
                name={'email'}
                label={'Email'}
                register={register}

              />
              {errors.email?.message}
            </li>
            <li className={styles.item}>
              <Input
                name={'password'}
                label={'Password'}
                type={isPassHide ? 'password' : 'text'}
                register={register}
              />
              {errors.password?.message}
              <span
                className={styles.passStatus}
                onClick={handlePassHide}
              >
                {isPassHide ? 'Reveal' : 'Hide'} password
              </span>
            </li>
          </ul>
          <Button
            black
            className={styles.btn}

          >
            Log In
          </Button>
        </form>

      </div>
    </ModalWindow>
  );
};

export default SignInForm;