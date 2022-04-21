import React from 'react';
import styles from './Navbar.module.css';
import { FaCoins } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <FaCoins className={styles.icon} />
        <h1>
          Coin <span className={styles.purple}>Search</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
