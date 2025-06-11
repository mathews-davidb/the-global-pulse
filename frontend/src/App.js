import './App.css';
import Crypto from './components/Crypto';
import Weather from './components/Weather';
import News from './components/News';

const App = () => {

  return (
    <div>
      <h1>The Global Pulse</h1>
      <ul>
        <Crypto />
        <Weather />
        <News />
      </ul>
    </div>
  );
}


export default App;
