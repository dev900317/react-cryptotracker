import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import CoinItem from '../CoinItem/CoinItem';
import styles from './Coins.module.css';

const Coins = ({ coins }) => {
  const renderList = coins.map((coin) => {
    return <CoinItem key={nanoid()} coin={coin} />;
  });

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          <p>#</p>
          <p className={styles.coinName}>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className={styles.hideMobile}>Volume</p>
          <p className={styles.hideMobile}>Mkt Cap</p>
        </div>
        {renderList}
      </div>
    </div>
  );
};

export default Coins;
