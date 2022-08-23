import FirstComponent from '../FirstComponent';
import logo from './logo.svg';

import './App.css';
import ClassComponent from '../ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
         <img src={logo} className="App-logo" alt="logo" />
       
        <FirstComponent />
        <ClassComponent example={'first props'} />
        <L

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
