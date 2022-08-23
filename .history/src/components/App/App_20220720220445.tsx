import Button from '../../sharedComponents/Button';
import Container from '../../sharedComponents/Container';
import Header from '../Header/Header';

import './App.css'

function App() {
  return (
    <div className="App">
      <Header title='Header' />
      
      qualquer coisa 
      <Container>
        <Button label='Button' size='small' variant='solid' color={'primary'} onClick={() => console.log('clicou no botão')} />
      </Container>
       
      
    </div>
  );
}

export default App;
