import React from 'react';
import styles from './Navbar.module.css';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to="/">
      <div className={styles.navbar}>
        <FaCoins className={styles.icon} />
        <h1>
          Coin <span className={styles.purple}>Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
