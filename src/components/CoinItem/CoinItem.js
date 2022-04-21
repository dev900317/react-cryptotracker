import React from 'react';
import styles from './CoinItem.module.css';

const CoinItem = ({ coin }) => {
  return (
    <div className={styles.coinRow}>
      <p>{coin.market_cap_rank}</p>
      <div className={styles.imgSymbol}>
        <img src={coin.image} alt="coin symbol" />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h.toFixed(2)}</p>
      <p className={styles.hideMobile}>${coin.total_volume.toLocaleString()}</p>
      <p className={styles.hideMobile}>${coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
