import { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines';


const Crypto = () => {
  const [crypto, setCrypto] = useState([]);

  const getCrypto = async() => {
    try {
      const response = await fetch('/api/crypto');
      const data = await response.json();
      return data;
    } catch(error) {
        console.log('Failed to fetch crypto:', error);
        return [];
    }
  }

  useEffect(() => {
    const getAPIData = async() =>{
      const data = await getCrypto();
      setCrypto(data);
    }

    getAPIData();
  },[])

  return (
    <section style={{ padding: '2rem 0' }}>
      <h2>Crypto Markets</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        color: '#eee',
        backgroundColor: '#111'
      }}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>24h Change</th>
            <th style={thStyle}>High</th>
            <th style={thStyle}>Low</th>
            <th style={thStyle}>Liquidity Ratio</th>
            <th style={thStyle}>Trend</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((coin) => {
            const changeColor = coin.price_change_percentage_24h >= 0 ? 'lime' : 'red';
            return (
              <tr key={coin.id} style={{ borderTop: '1px solid #333' }}>
                <td style={tdStyle}>
                  <img src={coin.image} alt={coin.name} width={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {coin.name} <span style={{ color: '#888' }}>({coin.symbol})</span>
                </td>
                <td style={tdStyle}>${coin.current_price.toLocaleString()}</td>
                <td style={{ ...tdStyle, color: changeColor }}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td style={tdStyle}>${coin.high_24h.toLocaleString()}</td>
                <td style={tdStyle}>${coin.low_24h.toLocaleString()}</td>
                <td style={tdStyle}>{(coin.total_volume/coin.market_cap*100).toLocaleString()}%</td>
                <td style={tdStyle}>
                  <Sparklines data={coin.sparkline} width={100} height={30}>
                    <SparklinesLine color="white" />
                  </Sparklines>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '0.75rem',
  backgroundColor: '#222',
  borderBottom: '2px solid #444'
};

const tdStyle = {
  padding: '0.75rem',
  fontSize: '0.9rem'
};


export default Crypto;