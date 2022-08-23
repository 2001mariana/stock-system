import HomeView from '../../views/HomeView'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
