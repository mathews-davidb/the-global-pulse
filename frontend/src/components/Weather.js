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
    <section style={{ padding: '1rem' }}>
    <h2 style={{ marginBottom: '1rem' }}>🌤️ Weather Snapshot</h2>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      {weather.map((city) => (
        <div
          key={city.city}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: '#fff',
            borderRadius: '10px',
            color: '#000',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          {city.error ? (
            <span style={{ color: 'red' }}>{city.error}</span>
          ) : (
            <>
              {/* Left side: icon + city info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={`http://openweathermap.org/img/wn/${city.icon}.png`}
                  alt={city.condition}
                  width={40}
                  height={40}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong>{city.city}</strong>
                  <span style={{ fontSize: '0.85rem', color: '#555' }}>{city.condition}</span>
                </div>
              </div>

              {/* Right side: temp */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1.2' }}>
                    {Math.round(city.temp)}°F
                </div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>
                    {Math.round(city.temp_max)}/{Math.round(city.temp_min)}
                </div>
                </div>
            </>
          )}
        </div>
      ))}
    </div>
  </section>
  );
}


export default Weather;