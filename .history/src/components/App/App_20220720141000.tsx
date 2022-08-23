import FirstComponent from '../FirstComponent';
import logo from './logo.svg';

import './App.css';
import ClassComponent from '../ClassComponent';
import LifeCycle from '../LifeCycle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
         <img src={logo} className="App-logo" alt="logo" />
       
        <FirstComponent />
        <ClassComponent example={'first props'} />
        <LifeCycle .>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
