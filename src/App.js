import React from 'react';
import Button from './components/Button' 

const App = () => {

  const onClick = () => {
    alert('test')
  }
  return (
    <div className="App">
       <h1>Hello Ionic world</h1>
     <Button onClick={onClick}>Ionic button</Button>
    </div>
  );
}

export default App;
