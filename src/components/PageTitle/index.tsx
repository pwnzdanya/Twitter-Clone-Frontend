import React from 'react';
import styles from './Title.module.scss'

interface IPageTitle {
  title: string
}

const PageTitle: React.FC<IPageTitle> = ({title}) => {
  return (
    <div className={styles.titleMain}>
      <div className={`${styles.wrapper} borderBottom`}>
        <div className={'pageTitle'}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;