import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import HomeView from '../../views/HomeView'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" element=<Home />/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
