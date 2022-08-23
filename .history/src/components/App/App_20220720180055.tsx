import Button from '../Button';
import Header from '../Header/Header';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header title='Header' />
      
      qualquer coisa 
      <div className='Container'>
        <Button label='Button' size='small' variant='solid' color={'primary'} onClick={() => console.log('clicou no botão')} />
      </div>
      
    </div>
  );
}

export default App;
