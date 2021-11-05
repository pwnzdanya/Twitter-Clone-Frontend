import React, {useEffect} from 'react';
import styles from './ModalWindow.module.scss'



interface IModalWindow {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
  title?: string
}

const ModalWindow: React.FC<IModalWindow> = ({isOpen, setIsOpen, title, children}) => {

  const modalClass = isOpen ? `${styles.modal} ${styles.active}` : styles.modal;

  const handleOpenStatus = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen])

  return (
    <div className={modalClass}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div
            className={styles.close}
            onClick={handleOpenStatus}
          >
            ЗАКРЫТЬ
          </div>
          <div className={styles.logoBody}>
           ТВИТТЕР ЛОГО
          </div>
        </div>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;