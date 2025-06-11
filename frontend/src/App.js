import './App.css';
import Crypto from './components/Crypto';
import Weather from './components/Weather';
import News from './components/News';

const App = () => {

  return (
    <div style={{ padding: '2rem', backgroundColor: 'fff', color: '#000', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <img
          src="/dailypulselogo.png"
          alt="The Daily Pulse logo"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto'
          }}
        />
      </div>

      {/* Horizontal row: crypto and weather */}
      <div className="layout-row">
        <div className="layout-left">
          <News />
        </div>
        <div className="layout-right">
          <Weather />
        </div>
      </div>

      <div>
        <Crypto />
      </div>
    </div>
  );
}


export default App;
