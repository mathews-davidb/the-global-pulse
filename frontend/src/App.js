import './App.css';
import Crypto from './components/Crypto';
import Weather from './components/Weather';
import News from './components/News';

const App = () => {

  return (
    <div style={{ padding: '2rem', backgroundColor: 'fff', color: '#000', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌐 Global Pulse</h1>

      {/* Horizontal row: crypto and weather */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        <div style={{ flex: '1 1 60%' }}>
          <News />
        </div>
        <div style={{ flex: '1 1 35%' }}>
          <Weather />
        </div>
      </div>

      {/* News takes full width below */}
      <div>
        <Crypto />
      </div>
    </div>
  );
}


export default App;
