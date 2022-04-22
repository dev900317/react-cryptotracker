import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import CoinItem from '../CoinItem/CoinItem';
import styles from './Coins.module.css';
import Coin from '../../routes/Coin';

const Coins = ({ coins }) => {
  const renderList = coins.map((coin) => {
    return (
      <Link to={`/coin/${coin.id}`} element={<Coin />} key={nanoid()}>
        <CoinItem coin={coin} />
      </Link>
    );
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
