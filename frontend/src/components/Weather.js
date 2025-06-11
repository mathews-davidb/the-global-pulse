import { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState([]);

  const getWeather = async() => {
    try {
      const response = await fetch('/api/weather');
      const data = await response.json();
      return data;
    } catch(error) {
        console.log('Failed to fetch weather:', error);
        return [];
    }
  }

  useEffect(() => {
    const getWeatherAPIData = async() =>{
      const data = await getWeather();
      setWeather(data);
    }

    getWeatherAPIData();
  },[])

  return (
    <div style={{padding: '1rem'}}>
        <h2>Weather Snapshot</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {weather.map((city) => {
          return (
            <div
            key={city.city}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '150px',
              textAlign: 'center'
            }}
          >
            <h4>{city.city}</h4>
            {city.error ? (
              <p>{city.error}</p>
            ) : (
              <>
                <img
                  src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
                  alt={city.condition}
                />
                <p>{Math.round(city.temp)}°F</p>
                <p>{city.condition}</p>
              </>
            )}
          </div>
          );
        })}
        </div>
    </div>
  );
}


export default Weather;