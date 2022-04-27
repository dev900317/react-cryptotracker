import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import styles from './Coin.module.css';
import DOMPurify from 'dompurify';

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const { coinId } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`;

  const fetchCoin = async () => {
    try {
      const res = await axios.get(url);
      setCoin(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.coinContainer}>
          <div className={styles.content}>
            <h1>{coin.name}</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.rank}>
              <span className={styles.rankBtn}>
                Rank # {coin.market_cap_rank}
              </span>
            </div>
            <div className={styles.info}>
              <div className={styles.coinHeading}>
                <img src={coin.image?.small} alt={`${coin.id} symbol`} />
                <p>{coin.name}</p>
                <p>{coin.symbol.toUpperCase()}/USD</p>
              </div>
              <div className={styles.coinPrice}>
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <table>
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </td>
                  <td>
                    {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </td>
                  <td>
                    {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </td>
                  <td>
                    {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </td>
                  <td>
                    {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </td>
                  <td>
                    {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.content}>
            <div className={styles.stats}>
              <div className={styles.left}>
                <div className={styles.row}>
                  <h4>24 Hour Low</h4>
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                </div>
                <div className={styles.row}>
                  <h4>24 Hour High</h4>
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.row}>
                  <h4>Market Cap</h4>
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                </div>
                <div className={styles.row}>
                  <h4>Circulating Supply</h4>
                  <p>${coin.market_data.circulating_supply.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.about}>
              <h3>About</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coin.description.en),
                }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coin;
