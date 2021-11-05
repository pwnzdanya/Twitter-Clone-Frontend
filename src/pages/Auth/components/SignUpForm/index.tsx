import React from 'react';
import ModalWindow from "../../../../components/UI/ModalWindow";

interface ISignInForm {
  isOpenModal: boolean
  setIsOpenModal: (isOpenModel: boolean) => void
}

const SignInForm: React.FC<ISignInForm> = ({isOpenModal, setIsOpenModal}) => {
  return (
    <ModalWindow isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
      ФОРМА РЕГИСТРАЦИИ
    </ModalWindow>
  );
};

export default SignInForm;