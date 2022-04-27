import React from 'react';
import styles from './Loader.module.css';
import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className={styles.content}>
      <AiOutlineLoading className={styles.icon} />
    </div>
  );
};

export default Loader;
