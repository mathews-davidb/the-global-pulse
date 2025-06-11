import './App.css';
import Crypto from './components/Crypto';
import Weather from './components/Weather';

const App = () => {

  return (
    <div>
      <h1>The Global Pulse</h1>
      <ul>
        <Crypto />
        <Weather />
      </ul>
    </div>
  );
}


export default App;
