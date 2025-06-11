import { useEffect, useState } from 'react';

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
    <div>
        {crypto.map((coin) => {
          return (
            <li key={coin.id}>
              {coin.name}: ${coin.current_price}
            </li>
          );
        })}
    </div>
  );
}


export default Crypto;