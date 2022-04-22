import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Coins from './components/Coins/Coins';
import Navbar from './components/Navbar/Navbar';
import Coin from './routes/Coin';

function App() {
  const [coins, setCoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);

      setCoins(result.data);
      console.log(result.data[0]);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
